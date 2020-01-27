FROM node:lts-alpine3.11
MAINTAINER Johnny Mkhael "johnny.mkhael@gmail.com"
COPY package.json /
RUN npm install
ADD ./app.js /app.js
CMD ["node", "./app.js"]
EXPOSE 5000
