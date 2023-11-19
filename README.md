This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a Next.js app that demonstrates a potential bug in the way intercepted + parallel routes interact with catch-all segments. 

## Steps to reproduce

* Open the home page at localhost:3000/
* Click either "Show thing 1" or "Show thing 2"
* Observe the error `Error: Cannot read properties of undefined (reading 'length')`, caused by the router attempting to load the route `src/app/[...slug]/page.tsx`, when it should have loaded `src/app/@modal/(.)things/[...ids]/page.tsx`.
* Also observe that when reloading the page, the router correctly loads `src/app/things/[...ids]/page.tsx`.

The vital steps needed to make this bug happen, is to _both_ have a top level `[...slug]` route, and that the route we're trying to load contains another catch-all route, namely `[...ids]`. If we either remove the top level `[...slug]`, or change the `things` route to use `[id]` instead of `[ids]`, it all works fine.