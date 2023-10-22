FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install --only=production
EXPOSE 8080
# Start the application
CMD ["node", "backend-a.js"]