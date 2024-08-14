const mongoose = require('mongoose');


// tZ13YiUwciOSGmmG
// mongodb+srv://heqingyang0126:<password>@cluster0.n1eyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://heqingyang0126:tZ13YiUwciOSGmmG@cluster0.n1eyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 连接成功');
  } catch (error) {
    console.error('MongoDB 连接失败:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;