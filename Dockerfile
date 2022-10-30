FROM node:18-alpine

RUN apk update && apk upgrade

WORKDIR .

EXPOSE 5173

CMD ["npm","run","dev"]