### BASE ###
FROM node:hydrogen-alpine as base

# Expose port & allow Node.js to use priviliged ports
EXPOSE 80
USER root
RUN apk add libcap && setcap CAP_NET_BIND_SERVICE=+eip /usr/local/bin/node

### BUILDER BE STAGE ###
FROM base as builderBE

# Setup dependencies for BE
WORKDIR /app
COPY ./server/package.json ./server/package-lock.json ./server/.npmrc ./
ENV PATH /app/node_modules/.bin:$PATH

# Install all dependencies
RUN npm install --silent

# Copy source code
COPY ./server/ ./

# Build BE source code
RUN npm run build


### RUN STAGE ###
FROM base as run

# Copy BE compiled code
COPY --from=builderBE --chown=node:node /app/dist/ /app/
# Copy BE dependency list
COPY --from=builderBE --chown=node:node /app/package.json /app/package-lock.json /app/.npmrc /app/
# Copy FE compiled code
COPY --from=builderFE --chown=node:node /app/dist/ /app/public

WORKDIR /app

# Install dependencies (production only) for BE
RUN npm install --production --silent

USER node

CMD node ./main

