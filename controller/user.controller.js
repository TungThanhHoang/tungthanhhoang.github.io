var db = require("../db");
var shortId = require("shortid");

module.exports.index = function (req, res) {
    res.render("user/index", {
        users: db.get("users").value()
    });
}
module.exports.search = (req, res) => {

    var name_search = req.query.q
    var result = db.get("users").value().filter((user) => {
        return user.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1
    })

    res.render("user/index", {
        users: result
    });
}
module.exports.create = (req, res) => {
   
    res.render("user/create");

}
module.exports.get = (req, res) => {
    var idName = req.params.id
    var user = db.get("users").find({ id: idName }).value();
    res.render("user/view", {
        idUser: user
    });
}
module.exports.postCreate = (req, res) => {
    req.body.id = shortId.generate();
    req.body.avatar = req.file.path.split("\\").slice(1).join("/");
    db.get("users").push(req.body).write();
    res.redirect("/user");
}