FROM node

RUN mkdir -p /home/app

COPY ./app/package.json /app

COPY ./app /home/app

CMD ["node", "/home/app/index.js"]