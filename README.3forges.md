# The Qwik expermient

## Run it

```bash
pnpm i && pnpm run dev
```

## Spawn it

```bash
pnpm create vite my-qwik-app --template qwik-ts
```

## Notable issues

### Routing


My first goal was to find out about routing.

I stumbled upon the first difficulty here: the docs really did not give me a working fix. I just created a `./src/routes/joke/index.tsx`, but http://localhost:5276/joke/ wouldn't give me the joke page, even with a `./src/routes/joke/layout.tsx`, and a `./src/routes/layout.tsx`



I found a very interesting github issue on the subject, from Feb. 2023 : 

* https://github.com/BuilderIO/qwik/issues/3142#issuecomment-1462325521
* https://github.com/ngfelixl/qwik-routing-reproduction/tree/main/src/routes
* https://github.com/ngfelixl/qwik-routing-reproduction

Oh I found another very, very intteresting `tsconfig.json` : https://github.com/BuilderIO/qwik/blob/26b73fa4366dc95b36e5af3b19d23d316031396c/tsconfig.json#L66