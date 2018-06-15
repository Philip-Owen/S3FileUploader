const express = require('express');
const AWS = require('aws-sdk');
const router = express.Router();

let s3 = new AWS.S3({
  accessKeyId: process.env.USER_KEY,
  secretAccessKey: process.env.USER_SECRET,
  Bucket: process.env.BUCKET_NAME,
});

router.post('/', function (req, res) {

  let file = req.files.myFile;

  function uploadFile(file) {

    let params = {
      Bucket: process.env.BUCKET_NAME,
      Key: file.name,
      Body: file.data,
    };

    s3.upload(params , function(err, data) {
      if(err){
        console.log('Error in upload', err);
        res.sendStatus(500);
      }
      console.log('Upload sucessful', data);
      res.sendStatus(200);
    });
  }

  uploadFile(file);
});

module.exports = router;
