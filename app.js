const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(3000, function () {
    console.log("listening")
})

var items = ["Buy Food ","Cook Food","Eat Food"];

app.get("/", function (req, res) {

    /*
    var today = new Date();
    var currentday = today.getDay();
    var day = "";
    switch (currentday) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 4:
            day = "Friday"
            break;
        case 4:
            day = "Saturday"
            break;
        default:
            day = "Sunday"
    } */
    
   
  
    var option = {
        day: "numeric",
        month: "long",
        weekday: "long"
    };

    var today = new Date();

    var day = today.toLocaleDateString("en-US", option);

    
    res.render("list", { kindofday: day, ditems: items});


});


app.post("/", function (req, res) {

    item = req.body.newitem;

    res.redirect("/");

    items.push(item);

});

