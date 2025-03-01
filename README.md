# date-fns-vs-dayjs

## analyze
esbuild: https://esbuild.github.io/analyze/

## 構成
- src
  - runner,benchの両方で利用できるよう、検証したい処理をdefault exportしているフォルダ
- runner
  - ./scripts/generate-runnerを使ってsrcの内容をconsole.logで表示するようにしてあるフォルダ
- bench
  - ベンチマークを取るためのコードをまとめたフォルダ