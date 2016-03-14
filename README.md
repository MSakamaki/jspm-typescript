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

### vantage

```sh
# vantage connect
> $ vantage 9002
> jspm-ts~$
> jspm-ts~$ help

# sample command

api sample
  -t --timeout api timeout setting
  -r --xhrcode api responce code

# responce time controle
> jspm-ts~$ api sample -t 2000
> jspm-ts~$ exit # ( or Ctrl + C )
> $ curl --dump-header - http://localhost:9001/api/sample
# waiting 2 second
HTTP/1.1 200 OK
X-Powered-By: Express
...

# responce code controle
> jspm-ts~$ api sample -r 404
> jspm-ts~$ exit # ( or Ctrl + C )
> $ curl --dump-header - http://localhost:9001/api/sample

HTTP/1.1 404 Not Found
X-Powered-By: Express
...

```


### 参考

 + [Typescript + JSX](http://blog.mgechev.com/2015/07/05/using-jsx-react-with-typescript/)
 + [Playing Demo](https://github.com/ruanyf/react-demos)

### 使ってみたい

 + [vantagejs](https://github.com/vantagejs)
   + mock controller
 + [xoxo](https://github.com/sindresorhus/xo)
 + [rxjs](https://github.com/Reactive-Extensions/RxJS)
