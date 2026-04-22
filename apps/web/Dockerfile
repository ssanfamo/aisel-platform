FROM node:20

ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
