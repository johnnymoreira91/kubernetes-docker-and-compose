FROM node:alpine
WORKDIR /usr/app
COPY . .

ENV NODE_ENV dev
ENV PORT 3001

# EXPOSE 3001

RUN yarn && yarn build

CMD ["node", "./dist/index.js"]
# CMD ['yarn build']

# FROM node:alpine

# WORKDIR /usr/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# LABEL description="node version 1.0"

# EXPOSE 3001

# CMD npm start
