const express = require('express');
const router = express.Router();
const Post = require('../server/models/Post');

const adminLayout = '../views/layouts/admin'

router.get('/admin', async (req, res) => {
    try {
        //const data = await Post.find();
        res.render('./admin/index', { layout: adminLayout });

    } catch (error) {
        console.log(error);
    }
});
router.get('/admin/dashboard', async (req, res) => {
    try {
       
        res.render('./admin/dashboard', { layout: adminLayout });

    } catch (error) {
        console.log(error);
    }
});
router.get('/admin/unauth', async (req, res) => {
    try {
       
        res.render('./admin/unauth', { layout: adminLayout });

    } catch (error) {
        console.log(error);
    }
});


router.post('/admin', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (req.body.username === process.env.ADMIN && req.body.password ===process.env.PASS) {
            res.redirect('./admin/dashboard')
        }
        else {
            res.redirect('./admin/unauth');
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;