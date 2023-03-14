import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from "path";

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const lambdaFunc = new NodejsFunction(this, 'hello-lambda', {
      functionName: 'hello-lambda',
      architecture: lambda.Architecture.X86_64,
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'lambdaHandler',
      entry: path.join(__dirname, '../', 'hellow-ts/hello-world/app.ts'),
    });
  }
}
