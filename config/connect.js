const mongoose = require("mongoose");
const  msg = {
  name: 'admin',
  pwd: '123456',
  dbName: 'blogNode'
}
const mongodbURI = `mongodb://${msg.name}:${msg.pwd}@localhost:27017/${msg.dbName}`
mongoose.connect(mongodbURI,{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false },function(err){
  if(err){
      console.log('mongodb数据库连接失败'+err);
  }else{
      console.log("mongodb数据库连接成功");
  }
})
