FROM hub.hamdocker.ir/node:alpine AS build

ARG DOMAIN
ARG GA
ARG RELEASE

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app

# Installing dependencies
COPY package.json .npmrc .yarnrc.yml ./
RUN yarn install

# Copying source files
COPY . /app/

# Building app
RUN yarn build

# Final stage
FROM hub.hamdocker.ir/node:alpine AS runner
WORKDIR /app/

COPY --from=build /app/package*.json /app/yarn.lock /app/
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
COPY --from=build /app/.next /app/.next

EXPOSE 3004

# Running the app
CMD ["yarn", "start"]
