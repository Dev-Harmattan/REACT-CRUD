const express = require('express');
const router = express.Router();
const {ObjectId} = require('mongoose').Types;

const {PostMessage} = require('../models/postMessage');

router.get('/', (req, res) => {
  PostMessage.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log(`Error while retrieving all Record: ${JSON.stringify(err, undefined, 2)}`);
    }
  })
});

router.post('/', (req, res) => {
  const newRecord = new PostMessage({
    title: req.body.title,
    message: req.body.message
  })

  newRecord.save((err, docs) => {
    if(!err) {
      res.send(docs)
    } else {
      console.log(`Error while posting a Record: ${JSON.stringify(err, undefined, 2)}`);
    }
  })
});

router.put('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${JSON.stringify(req.params.id)}`)
  } else {
    const updatedRecord = {
      title: req.body.title,
      message: req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id, {$set: updatedRecord}, {new: true}, (err, docs) => {
      if(!err) {
        res.send(docs)
      } else {
        console.log(`Error while updating a Record: ${JSON.stringify(err, undefined, 2)}`);
      }
    })
  }
});

router.delete('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${JSON.stringify(req.params.id)}`)
  } else { 
    PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
      if(!err) {
        res.send(docs)
      } else {
        console.log(`Error while deleting a Record: ${JSON.stringify(err, undefined, 2)}`);
      }
    })
  }
})

module.exports = router;