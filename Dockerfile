FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install

#Run the first time set up script and start the app
CMD ["sh", "-c", "npm run build && npm run start"]
EXPOSE 3000