# CORE_FW_GPT_Integrator_Styles
- CORE Framework GPT Integrator の Web埋め込みチャット の UI Style を独自にカスタマイズするための SCSS および ビルドスクリプトです。
- scss + tailwindcss を利用しているため、カスタマイズが容易です。

## Style編集 & CSS Build の方法
- clone した後、 `yarn install` で依存パッケージをインストールします。
- `./styles` 配下の SCSS を編集します。
- その後、下記のコマンドを実行します。
  - Build CSS: `yarn build:css`
  - Build CSS (watch mode): `yarn build:css:watch` or `yarn build:css --watch`
- ビルドされた CSS は `./dist/gpt-integrator-styles.min.css` として出力されます。

### 出力CSSについて
- 出力ファイル名や出力先ディレクトリは、 [package.json](package.json) にて指定しています。
- その他の出力設定は [tailwind.config.js](tailwind.config.js) および [postcss.config.js](postcss.config.js) にて変更可能です。
  - すべてのStyle指定に 親セレクタ `.cfwgiui-wrapper` が付与されます。 ([postcss.config.js](postcss.config.js) にて指定)
    - 埋め込み先WebページのCSSとの競合を避ける目的です。

## 利用の前提

## 埋め込み方法
- 1. CORE Framework GPT Integrator の "インターフェース定義" にて、 "デフォルトCSSを無効化" にチェックを入れた状態で Web埋め込みを設定します。
- 2. その上で、本レポジトリを利用して Style をカスタマイズし、Build した CSS を 読み込みます。

```html
<!-- カスタム Build した CSS を アップロードしておき、 Load する-->
<style href="https://your-any-domain.com/css/gpt-integrator-styles.min.css" rel="stylesheet"></style>

<!-- チャット埋め込みスクリプトを設置 -->

```



