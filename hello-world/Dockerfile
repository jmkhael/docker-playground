FROM mhart/alpine-node:latest
MAINTAINER Stratus Clay "calclayer@murex.com"
COPY package.json /
RUN npm install
ADD ./app.js /app.js
CMD ["node", "./app.js"]
EXPOSE 5000
