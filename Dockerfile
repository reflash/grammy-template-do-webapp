FROM denoland/deno:alpine-1.26.1

EXPOSE 8000
WORKDIR /app

USER deno

COPY bot/deps.ts bot/deps.ts
RUN deno cache bot/deps.ts

COPY frontend/deps.ts frontend/deps.ts
RUN deno cache frontend/deps.ts

ADD . .
RUN deno cache bot/main.ts
RUN deno cache frontend/index.tsx

USER root
RUN deno install -A --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts
RUN chmod +x ./start.sh

WORKDIR /app/frontend
RUN rm -rf dist/
RUN mkdir dist/

RUN deno-create-react-app build
WORKDIR /app

CMD ["sh", "start.sh"]