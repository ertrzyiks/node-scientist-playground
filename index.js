var MyModel = require('./MyModel');

var m = new MyModel()
m.myMethod(function (err, value) {
    console.log('----------------------');
    console.log("MY METHOD VALUE", value);
    console.log('----------------------');
});
