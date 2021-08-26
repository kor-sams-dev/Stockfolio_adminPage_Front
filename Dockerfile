# Builder
FROM node:14.17.4 as builder

LABEL PO=HellP
LABEL PM=Developer-Mang
LABEL PO_Mail=fg9658@gmail.com
LABEL PM_Mail=chiwon618@gmail.com
LABEL Maintainers=euiyeonlee,lunathebright
LABEL Maintainers_Mail=lunabright817@gmail.com,leyeon94@gmail.com

WORKDIR /app

COPY package.json .
RUN npm install --silent

COPY . /app
RUN npm run build

# Distribution
FROM nginx:alpine as distribution

LABEL PO=HellP
LABEL PM=Developer-Mang
LABEL PO_Mail=fg9658@gmail.com
LABEL PM_Mail=chiwon618@gmail.com
LABEL Maintainers=euiyeonlee,lunathebright
LABEL Maintainers_Mail=lunabright817@gmail.com,leyeon94@gmail.com

RUN apk update && apk upgrade && \
    apk --update add bash ca-certificates

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

WORKDIR /app

COPY --from=builder /app/build/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]