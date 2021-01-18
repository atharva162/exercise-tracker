const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongodb= require('mongodb');
const mongoose = require('mongoose');

app.use(cors())
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
const uri= process.env.URI;
mongoose.connect('mongodb+srv://atharva:shahrukh1@cluster0.a2ycq.mongodb.net/db1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
let exerciseSchema = mongoose.Schema({
  description: String,
  duration: Number,
  date: String
})
let personSchema = mongoose.Schema({
  name: String,
  log: [exerciseSchema]
});
let responseObj1 = {};
let User = mongoose.model('User',personSchema);
let ExerciseSchema = mongoose.model('ExerciseSchema',exerciseSchema);
app.post('/api/exercise/new-user',(req,res)=>{
  const username = req.body.username;
  var usernamedoc = new User({name: username});
  usernamedoc.save(function(err,data){
    if (err) return console.log(err);
    responseObj1['_id'] = data._id;
    responseObj1['username'] = data.name;
    res.json(responseObj1);
  })
})
app.get('/api/exercise/users',(req,res)=>{
  User.find({},function(err,doc){
    res.json(doc);
  })
})
app.post('/api/exercise/add',(req,res)=>{
  let exercisedoc = new ExerciseSchema({
      description: req.body.description,
      duration: parseInt(req.body.duration),
      date: req.body.date
  })
  if(exercisedoc.date===''){
  exercisedoc.date = new Date().toISOString().slice(0, 10);
  }
  let responseObj2 = [];
  User.findOneAndUpdate({_id: req.body.userId},{$push: {log: exercisedoc}},{new: true},(err, updateddoc)=>{
        res.json(updateddoc);
  })
})
app.get('/api/exercise/log',(req,res)=>{
    User.find({_id: req.query.userId},(err,resultdoc)=>{
      if(err) return console.log(err);
        responseObj2 = resultdoc;
        let count= resultdoc[0].log.length;
        responseObj2['count']= count;
        res.json(responseObj2);
    })
  })