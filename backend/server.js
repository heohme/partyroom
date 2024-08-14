const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const roleRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

// 连接到MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('成功连接到MongoDB Atlas'))
.catch(err => console.error('连接MongoDB Atlas失败:', err));

// 连接数据库
connectDB();

app.use(cors());
app.use(express.json());

// API 路由
app.use('/api', roleRoutes);

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});