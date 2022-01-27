# Step 1

FROM node:14-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm rebuild node-sass

RUN npm run build

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html