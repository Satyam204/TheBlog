const express = require('express');
const router = express.Router();
const Post=require('../server/models/Post');

router.get('', async (req,res)=>{
      try {
    const data = await Post.find();
    res.render('index', { data });
  } catch (error) {
    console.log(error);
  } 
});

router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });
    
    res.render('post', {data});
  } catch (error) {
    console.log(error);
  }

});

router.get('/about',(req,res)=>{
    res.render('about');
});

module.exports = router;
