# lambda-container-support-sample

re:Invent 2020でAWS LambdaがContainerをサポートしたのでお試し。

実際に実行するにはこのリポジトリを`git clone`して手元で`docker build`してECRにpushしておく必要があります。

Lambda側は新たにファンクションを作るときにこのECR上のイメージを指定するだけです。
