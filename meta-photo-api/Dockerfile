# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que la aplicación correrá
EXPOSE 8080

# Comando para correr la aplicación
CMD ["node", "dist/index.js"]
