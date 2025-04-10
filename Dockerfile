# Étape 1 : Construction
FROM node:22 AS build

WORKDIR /app

COPY --from=build /app /app

EXPOSE 5000

CMD ["node", "server.js"]
