# Étape 1 : build
FROM node:22-alpine AS build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation de TOUTES les dépendances (dev incluses) pour le build
RUN npm ci

# Copie du code source
COPY . .

# Build de l'application (Vite génère dans /dist par défaut)
RUN npm run build

# Étape 2 : serveur léger pour servir le build statique
FROM nginx:alpine

# Copie des fichiers buildés depuis le dossier /dist (pas /build)
COPY --from=build /app/dist /usr/share/nginx/html

# Configuration nginx pour SPA (Single Page Application)
RUN echo 'server {' > /etc/nginx/conf.d/default.conf && \
    echo '  listen 80;' >> /etc/nginx/conf.d/default.conf && \
    echo '  server_name localhost;' >> /etc/nginx/conf.d/default.conf && \
    echo '  root /usr/share/nginx/html;' >> /etc/nginx/conf.d/default.conf && \
    echo '  index index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '  location / {' >> /etc/nginx/conf.d/default.conf && \
    echo '    try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '  }' >> /etc/nginx/conf.d/default.conf && \
    echo '  # Optimisation pour les assets statiques' >> /etc/nginx/conf.d/default.conf && \
    echo '  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {' >> /etc/nginx/conf.d/default.conf && \
    echo '    expires 1y;' >> /etc/nginx/conf.d/default.conf && \
    echo '    add_header Cache-Control "public, immutable";' >> /etc/nginx/conf.d/default.conf && \
    echo '  }' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

EXPOSE 3020

CMD ["nginx", "-g", "daemon off;"]