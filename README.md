## Article link
Please read the following article to learn how to set up typescript in a nodejs lambda package.
https://levelup.gitconnected.com/how-to-use-typescript-for-aws-lambda-in-3-steps-1996243547eb

## Deploy
```
$ cd hello-world
$ npm run compile
$ cd ..
$ sam deploy
```

## Test 
```
$ curl https://<endpoint id>.execute-api.us-east-1.amazonaws.com/Prod/hello/?a=1
Queries: {"a":"1"}
```