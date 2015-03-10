# base

An npm package base bundled for the browser through `browserify` with full ES6/7 support through 
`babel`.

## Playground

```
npm start
```

Develop and try your code right away through `livereload`.
Put all of your examples in `./playground` which is served through `node-static` with no caching 
on `http://localhost:3000`.

## Build

```
npm run build
```

Build your project to `./dist` using `uglify2` to make your JS production ready.

## Test

```
npm test
```

It includes `jest` to test stuff. There's a sample test on the sample feature included in the sample
module :). See `module/feature.js` and `module/__tests__/feature-test.js`.

## License

MIT. Darío Javier Cravero <dario@uxtemple.com>
