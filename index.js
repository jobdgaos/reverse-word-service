const express = require('express');
const util = require("./util");
var cors = require("cors");
const app = express();

app.use(cors());

const port = 6202;

app.get("/", function (req, res) {
    res.type("text");
    res.send("Welcome home");
  });

  app.get('/iecho', (req, res) => {
    var badRequest = false;
    var entryText = req.query.text;
    var response;
    var code;

    //Verify query tag
    if (entryText == null || entryText == "") {
        badRequest = true;
        code = 400;
        response = { error: "no text" };
    }

    if (!badRequest) {
        var reverseText = util.reverseText(entryText);
        var cleanedText = util.cleanText(entryText);
        var reverseCleanedText = util.reverseText(cleanedText);
        
        code = 200;
        response = { text: reverseText , palindrome: (reverseCleanedText === cleanedText)};
    }

    res.status(code);
    res.json(response);
});
  
  module.exports = app;

// Configuring body parser middleware
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.send('Hello World, from express');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))*/
//module.exports = app;