// connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_v3287s0g:1u008av8uns947q4bo8dn1q3oh@ds119380.mlab.com:19380/heroku_v3287s0g'); // heroku...已是一個 database]]
//    帳號       :             密碼          @       主機            /       資料庫    

// 這段程式，首先將資料庫賦值給”db”變數。”db.on()”的第一個參數是資料庫狀態，這裡代表當發生錯誤時，顯示相應訊息
// 最後”db.once()”，一旦資料庫狀態為”open”，執行callback()，這裡只在console顯示連結成功
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Database Connected.");
});

// 撈資料出來
var List = [];

var collection = db.collection('forms');
// 使用forms.collection 進行操作
collection.find(function(err, documents) {
    if (err) throw err;
    // 將找到的資料轉為陣列後傳給 productList
    List = documents;
    // 關閉資料庫連線
    db.close();
    // 資料處理完畢後，開始撰寫回傳值

    console.log(JSON.stringify(List)); // JSON 只是代表一種格式(有key跟value對應的那種)

});






// get data 
/*module.exports = function(mongoose) {
    var schema = mongoose.Schema;
    var collName = new schema({

        }, { collection: '' }) // specify collection name as the 2nd argument when defining your schema:
}
*/
/*
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
*/