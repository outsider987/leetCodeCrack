

FROM node:18.8-alpine  as builder

WORKDIR /app
COPY package*.json .
COPY . .
RUN ls
RUN npm i -D tsconfig-paths
RUN npm install -g npm@9.4.1


RUN npm i ;


RUN npm run build

#stage2
# FROM nginx:1.19
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /react-app/build /usr/share/nginx/html


# FROM pierrezemb/gostatic
# COPY ./dist/ /srv/http/
# EXPOSE 80

# FROM mhart/alpine-node
# RUN yarn global add serve
# WORKDIR /app
# COPY --from=builder /app/dist .
# CMD ["serve", "-p", "8080", "-s", "."]


# FROM nginx:alpine AS prod
# WORKDIR /usr/share/nginx/html
# COPY --from=builder /app/dist .
# EXPOSE 80
# # run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM nginx:alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

