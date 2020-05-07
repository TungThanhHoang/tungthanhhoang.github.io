var express = require("express");

var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");

var userRouter = require("./router/user.router");
var authRouter = require("./router/auth.router");
var productRouter = require("./router/product.router");

var authMiddlewares = require("./middlewares/auth.middlewares");

var app = express();

var port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser('hjdfhdjfhdkjfhsdfjd'));
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render("index");

})
app.use("/user" , userRouter);
app.use("/auth" , authRouter );
app.use("/product" , productRouter);

app.listen(port, function() {
    console.log("Server listenning on port " + port);
})