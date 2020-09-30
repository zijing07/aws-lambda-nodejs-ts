## Article link
Please read the following article to learn how to set up typescript in a nodejs lambda package.
https://levelup.gitconnected.com/how-to-use-typescript-for-aws-lambda-in-3-steps-1996243547eb

## Deploy
```
$ cd hello-world
$ npm run compile
$ cd ..
$ sam package --s3-bucket sam-lambda-ts && sam deploy --s3-bucket sam-lambda-ts
```
