#!/bin/sh
deno run --allow-net --allow-env bot/main.ts &

cd frontend/
deno run -Ldebug --allow-run --allow-read --allow-net --allow-env server.ts