# vite5_tailwind3_scss_ejs_template

- 這是一個給新手練習網頁切版，單純的 vite5 + tailwind3 + scss 的環境，並使用 ejs 做為模板引擎。
- 整合 firebase hosting ，可快速將網頁佈署到 fireabse 上 (firebase 需自行建立資源，並取代我的預設值)
- 此範例亦可做為普通網站的建立工具

## develop

- node.js >= 18
- npm install
- npm run dev

## firebase hosting

- 更改 .firebaserc default 為你的 fireabse 專案 id
- 更改 firebase.json ，如有多個網站請加入 "site":"demo1234-4e408" (預設不寫site為空字串)
- npm install -g firebase-tools
- firebase logout (先將本機有的 fireabse 登出)
- firebase login (登入新的 firebase 帳戶)
- npm run deploy 

