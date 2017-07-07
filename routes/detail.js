var express = require('express');
var router = express.Router();

/* GET news */
router.get('/', function (req, res, next) {
    console.log(JSON.stringify(req.query));
    var title = req.query.title;
    var content = req.query.content;
    res.render('detail', {
        title: '这是新闻列表页面',
        content: content || "--"
    });
});

module.exports = router;