FROM node:12-slim AS builder
WORKDIR /home/node
COPY . .
RUN yarn install && \
    yarn build

FROM node:12-alpine
COPY --from=builder /home/node .
EXPOSE 3000
CMD [ "yarn", "start" ]
