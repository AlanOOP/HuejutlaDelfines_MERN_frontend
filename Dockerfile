# correr doccker 
# docker build -t client .

FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build app
EXPOSE 5173

# Start app
CMD [ "npm", "dev" ]