var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        userList:[
            {
                userName:'李柱子',
                age:68
            },
            {
                userName:'孙天文',
                age:32
            },
            {
                userName:'标哥',
                age:18
            },
        ]
    });
});

module.exports = router;