import { Hono } from 'hono';
import { html } from 'hono/html';
import { logger } from 'hono/logger';

import { api } from './api';

export const routes = (app: Hono) => {
  app.use('*', logger());

  app.route('/api', api);

  app.get('*', (c) => {
    const scriptPath = import.meta.env.PROD
      ? '/static/client.js'
      : '/src/client.ts';
    return c.html(
      html`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/static/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mini Stock</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.violet.min.css"
    />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="${scriptPath}"></script>
  </body>
</html>`
    )
  })
};
