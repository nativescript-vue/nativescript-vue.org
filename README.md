# NativeScript-Vue website [![Netlify Status](https://api.netlify.com/api/v1/badges/6b14c9ec-0c06-4ede-b8f6-0bdb13de2bfd/deploy-status)](https://app.netlify.com/sites/nativescript-vue/deploys)


This is the source for the [nativescript-vue.org](https://nativescript-vue.org/) website.

Contributions are welcome, all the content is placed in the `content` directory.

## How to build the documentation

After cloning the repository, do the following steps

``` bash
cd nativescript-vue.org/
npm run build:js
npm run build:css
npm run build
```

This sequence is only needed the first time. After that, the only command needed is:

``` bash
npm run build
```

## Serve the documentation

Install the `serve` npm package globaly:

``` bash
npm install -g serve
```

Run the HTTP server using the already generated `dist/` directory:

``` bash
serve dist/
```

Now, you can open the `http://localhost:5000` URL in your browser to see the generated docs.

## How to build in watch mode

In order to detect changes in the `content` directory and rebuild automatically the docs, run the following sentence:

``` bash
npm run dev
```
