const express = require('express')
const res = require('express/lib/response')
const { dirname } = require('path')
const app = express()
const port = 3000 

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')



app.get('/', (req, res) => {
 // res.send('Pagina principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/educacion', (req, res) => {
    res.render('educacion',{
        titulo:"seccion educacion",
        descripcion:"aqui encontraras la descipsion "
    })
  })
  app.get('/laboral', (req, res) => {
    res.send('pagina de la experiencia laboral')
    res.render('Laboral')
  })
  app.get('/datos', (req, res) => {
    res.render('DatosPersonales')
    res.send('Datos basicos')
    
  })
  app.get('/habilidades', (req, res) => {
    res.send('Me gusta mucho el codigo pero no me gusta las bases de datos')
  })
  
  app.get('/conocimientos', (req, res) => {
    res.send('aca encontraras los conocimientos en diferentes herramientas')
  })
app.listen(port, () => {
  console.log(`accede al servidor haciendo click aqui  http://localhost:${port}`)
})

app.use((req,res,next) =>{
    res.status(404).sendFile(__dirname+'/public/404.html')
})