FROM node:22-alpine

WORKDIR /app
RUN npm install --global nodemon
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]