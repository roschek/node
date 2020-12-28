const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
var artists =[
    {
      id:1,
      name:'Metallica'},
  {
    id:2,
    name:'Offsprins'
  },
  {
    id:3,
    name:'AC/DC'
  },
  {
    id:4,
    name:"Scorpions"
  }
]
app.get('/',function (req,res){
  res.send('hello backend');
})
app.get('/artists',function (req,res){
  res.send(artists)
})
app.get('/artists/:id', function(req,res){
  const artist = artists.find(art=>art.id === Number(req.params.id))
  if(artist){
  res.send(artist)}
  else res.send('Not that artist')
})
app.listen(3012,function (){
  console.log('server started on port 3012')
})
app.post('/artists', function(res,req){
  console.log(req.body)
  res.send(req.body)
})
app.put('/artists/:id', function (req,res){
  let artist = artists.find(art=>art.id === Number(req.params.id))
      artist.name = "blablabla"
     res.sendStatus(200)
})

app.delete('/artists/:id',function (req,res){
   artists =artists.filter(artist => artist.id !==Number(req.params.id))
  res.sendStatus(200)
})
