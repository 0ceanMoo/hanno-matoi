# hanno-matoi

飯能消防団の旧HPをバックアップしたので、herokuに展開して表示する方法。


## herokuにログイン
herokuには既に登録済みとする

```
$ heroku login
```

## githubからcloneしてherokuにデプロイ
```
$ git clone git@github.com:0ceanMoo/hanno-matoi.git
$ cd hanno-matoi
$ heroku create [hanno-matoi]
$ git push heroku main
```

heroku createの[]は未記入ならランダムで名前がつく


## herokuにデプロイされたサイトを確認
```
$ heroku open
```
