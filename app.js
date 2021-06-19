
const path = require('path')
const express = require('express')
const hbs=require('hbs')

const boardcast = require('./src/utils/boardcast')

const app = express()
const port=process.env.PORT||5000

//path for con fig
const publicDirectryPath=path.join(__dirname,'/public')
const viewsPath=path.join(__dirname,'/templates/views')
const partialsPath=path.join(__dirname,'/templates/partials')
//setup handlebar engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//setup static directory to serve
app.use(express.static(publicDirectryPath))
app.get('',(req,res)=>{
  res.render('index',{
    title:'WTC-2021',
    name:'Vasanth'

  })
})
 app.get('/score',(req,res)=>{
    boardcast((error,{stat,score}={})=>{
        if(error){
            return res.send({error})
        }    
        
        res.send({
          score,
          stat

        })
    })
})
app.listen(port,()=>{
    console.log("server is port"+port)
})