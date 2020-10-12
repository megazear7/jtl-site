JTL converts properly formatted JSON into HTML. To install JTL use npm.

#### Install
```bash
npm install @megazear7/jtl
```

JTL is provided in ESM, CJS, and UMD format. Here is an example:

#### Example
```js
import { jtl } from '@megazear7/jtl';

const json = {
    name: "html",
    attr: {
        "lang": "en"
    },
    children: [
        { name: "head" },
        {
            name: "body",
            children: [
                { name: "h1", content: "Hello, World!" }
            ]
        }
    ]
}

const html = jtl(json).toHtmlString();
```

This will output the following html:

#### Output
```html
<html lang="en">
   <head></head>
   <body>
      <h1>Hello, World!</h1>
   </body>
</html>
```
