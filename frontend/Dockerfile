FROM node:lts-alpine

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173

# CMD ["yarn", "tailwind", "&", "yarn", "dev"]
CMD ["sh", "-c", "yarn tailwind & yarn dev"]