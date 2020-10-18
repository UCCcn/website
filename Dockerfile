FROM node:12-slim

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update \
    && apt-get install -yq curl ca-certificates --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /src/*.deb

WORKDIR /home/node/website

COPY . .

ENV YARN_VERSION 1.22.10

RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz \
    && yarn install \
    && yarn build \
    && bash -c "$(curl -fsSL https://raw.githubusercontent.com/DIYgod/RSSHub/master/tools/clean-nm.sh)"

EXPOSE 3000

CMD [ "yarn", "start" ]
