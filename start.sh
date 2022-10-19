#!/bin/sh
deno run --allow-net --allow-env bot/main.ts &

cd frontend/
deno run --allow-run --allow-read --allow-net --allow-env server.ts