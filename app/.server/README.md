# .server convention

Thanks to vite you can put all your server specific code under this directory. 
This is a great place to put your server code, like API routes, server middleware, database connections, etc.

This directory is not included in the client build, so you can use server-specific modules here.
We highly recommend you don't use barrel files to export from here. 
Instead, import the files directly where you need them.

For example, do this:

```js
import { getPosts } from '~/server/api/posts'
```

Instead of this:

```js
import { getPosts } from '~/server'
```

It can cause circular dependencies in your project and make it harder to understand where things are coming from.
Your file might have more imports but your bundles will thank you for it!