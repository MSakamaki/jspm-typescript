Typescript 用 JSPM すたーたっぷ :beer:
====

[Microsoft TypeScriptSample](https://github.com/Microsoft/TypeScriptSamples/tree/master/jspm) to [JSPM](http://jspm.io/)


```sh

# start up
git clone https://github.com/MSakamaki/jspm-typescript.git
cd jspm-typescript
npm install

# client develop install
jspm install
jspm install npm:iconv-lite -o "{ 'map': {'./extend-node': 'extend-node', './streams': 'streams'}}"

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


### 参考

 + [Typescript + JSX](http://blog.mgechev.com/2015/07/05/using-jsx-react-with-typescript/)
 + [Playing Demo](https://github.com/ruanyf/react-demos)

### 使ってみたい

 + [vantagejs](https://github.com/vantagejs)
 + [xoxo](https://github.com/sindresorhus/xo)
