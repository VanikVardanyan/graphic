FROM node:13.14

WORKDIR /van/graph

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
