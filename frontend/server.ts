import * as oak from "https://deno.land/x/oak@v6.5.0/mod.ts";

export function runServer(port: number) {
    const router = new oak.Router();
    router
      .get('/ping', ctx => {
        ctx.response.body = 'pong'
      })
      .get('/', async ctx => {
        await oak.send(ctx, 'index.html');
      })
      .get('/static/:path(.*)', async ctx => {
        await oak.send(ctx, 'dist/build' + ctx.request.url.pathname);
      })
  
    const app = new oak.Application();
    app.use(async (ctx, next) => {
      const query = oak.helpers.getQuery(ctx)
      try {
        await next();
      } catch (err) {
        if (oak.isHttpError(err)) {
          ctx.response.body = {
            code: err.status,
            message: err.message,
            stack: query.trace == undefined ? undefined : err.stack,
          }
          ctx.response.status = err.status
        } else {
          throw err;
        }
      }
    })
    app.use(router.routes());
    app.use(router.allowedMethods());
  
    return app.listen({port: port});
}

await runServer(3000);