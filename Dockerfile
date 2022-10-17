FROM denoland/deno:alpine-1.26.1

EXPOSE 1993
WORKDIR /app

USER deno

COPY bot/deps.ts bot/deps.ts
COPY frontend/deps.ts frontend/deps.ts
RUN deno cache bot/deps.ts
RUN deno cache frontend/deps.ts

ADD . .
RUN deno cache bot/main.ts
RUN deno cache frontend/index.tsx

CMD ["run", "--allow-net", "--allow-env", "bot/main.ts"]