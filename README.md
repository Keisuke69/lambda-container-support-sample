# lambda-container-support-sample

re:Invent 2020でAWS LambdaがContainerをサポートしたのでお試し。

実際に実行するにはこのリポジトリを`git clone`して手元で`docker build`してECRにpushしておく必要があります。

以下コマンド実行サンプル

```
git clone https://github.com/Keisuke69/lambda-container-support-sample
cd lambda-container-support-sample
docker build -t lambda-container-support-sample .
aws ecr create-repository --repository-name lambda-container-support-sample --image-scanning-configuration scanOnPush=true //なければ作る。既存のものでもOK
docker tag lambda-container-support-sample:latest <AWS AccountId>.dkr.ecr.us-east-1.amazonaws.com/lambda-container-support-sample
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <AWS AccountId>.dkr.ecr.us-east-1.amazonaws.com
docker push <AWS AccountId>.dkr.ecr.us-east-1.amazonaws.com/lambda-container-support-sample:latest
```

Lambda側は新たにファンクションを作るときにこのECR上のイメージを指定するだけです。

ファンクションの内容は単純にGoogleのトップページをリクエストしてそれを出力してるだけです。


