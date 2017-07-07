var express = require('express');
var router = express.Router();

/* GET news */
router.get('/', function (req, res, next) {
    res.render('news', {
        title: '这是新闻列表页面',
        newsList: [{
                title: '新闻11111',
                content: "新闻11111========"
            },
            {
                title: '新闻222',
                content: "新闻222========"
            },
            {
                title: '新闻33333',
                content: "新闻33333========"
            },
        ]
    });
});

module.exports = router;