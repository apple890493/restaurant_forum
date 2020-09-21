# 餐廳論壇(僅開放測試)

## View
<img width="300" height="200" src="https://github.com/apple890493/expense-tracker-2.0/blob/master/pic/4.JPG"/>

## 功能列表
### 管理者
- 可以瀏覽、新增、編輯、刪除所有餐廳資料
- 可以瀏覽、新增、編輯、刪除所有餐廳種類
- 可以瀏覽所有使用者，並管理身分
- 可以瀏覽、刪除所有使用者評論紀錄
### 使用者
- 可以瀏覽所有餐廳資料
- 可以瀏覽餐廳評論
- 可以瀏覽其他使用者首頁
- 可以編輯自己首頁
- 可以收藏餐廳
- 可以追蹤其他使用者

## 種子資料
| Account | Password |  | 
| ---------- | ----------- | ----------- |
| root@example.com | 12345678   | Admin |
| user1@example.com | 12345678   | User |
| user2@example.com | 12345678   | User |

### 啟動方式
- 將專案clone到本地端
  `https://github.com/apple890493/restuarant_forum.git`
- 進入專案
  `cd restuarant_forum`
- 下載package
  `npm install`
- 設定環境變數
  `cp .env.example .env`
- 安裝 Dependencies
  `CREATE DATABASE forum`
  `use forum`
- DB Setup
  `npx sequelize db:migrate`
- 載入種子資料
  `npx sequelize db:seed:all`
- 透過nodemon啟動專案
  `npm run dev`
- 最後在terminal可以看到 localhost : 3000
  `開啟瀏覽器在網址列輸入localhost:3000`

### 開發環境
- "bcryptjs": "^2.4.3",
- "body-parser": "^1.19.0",
- "connect-flash": "^0.1.1",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "express-handlebars": "^5.1.0",
- "express-session": "^1.17.1",
- "faker": "^5.1.0",
- "imgur-node-api": "^0.1.0",
- "method-override": "^3.0.0",
- "moment": "^2.28.0",
- "multer": "^1.4.2",
- "mysql2": "^2.1.0",
- "passport": "^0.4.1",
- "passport-local": "^1.0.0",
- "pg": "^8.3.3",
- "sequelize": "^6.3.5",
- "sequelize-cli": "^6.2.0"