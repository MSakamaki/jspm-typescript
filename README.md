Typescript 用 JSPM すたーたっぷ :beer:
====

[Microsoft TypeScriptSample](https://github.com/Microsoft/TypeScriptSamples/tree/master/jspm) to [JSPM](http://jspm.io/)


```sh
git clone https://github.com/MSakamaki/jspm-typescript.git
cd jspm-typescript
npm install
jspm install

# server api install
cd server
jspm install
cd ../

# start develop
gulp

# enjoy!
```

### add server api

```sh
# ex) express jspm install
cd server
jspm install npm:express
cd ../
```

### Development Tasks

```sh
gulp help
```


### 使ってみたい

 + [vantagejs](https://github.com/vantagejs)
 + [xoxo](https://github.com/sindresorhus/xo)
