FROM node:17-alpine
WORKDIR app
COPY . ./
RUN ls -la
RUN npm install && npm run build
COPY . .
RUN ls -la
EXPOSE 3000
CMD ["node","build/src/index.js"]