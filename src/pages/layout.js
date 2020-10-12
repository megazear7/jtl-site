import { html } from 'orison';
import header from '../partials/header.js';
import footer from '../partials/footer.js';

export default context => html`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${context.root.data.title}</title>
    <script src="/app.js"></script>
    <link rel="stylesheet" type="text/css" href="/app.css">
  </head>
  <body>
    ${header(context.root.data.title)}
    <main>
      ${context.page.html}
    </main>
    ${footer()}

    <link rel="stylesheet" href="/vendor/highlightjs/github.css">
    <script src="/vendor/highlightjs/highlight.pack.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </body>
</html>
`;
