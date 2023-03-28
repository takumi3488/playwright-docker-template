FROM ubuntu:22.04
WORKDIR /app

ENV TZ Asia/Tokyo
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP.UTF-8
ARG DB_URL
ARG NODE_ENV

COPY package.json yarn.lock ./
RUN apt-get update && apt-get install -y curl && \
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
  apt-get install -y nodejs && \
  npm i -g yarn && \
  yarn && \
  yarn playwright install --with-deps chromium
COPY . .

CMD ["yarn", "esm", "kobe_lib/create_book.ts"]
