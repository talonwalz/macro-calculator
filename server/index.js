const express = require('express')
const app = express()
const port = 3333
const entryCtrl = require('./controllers/entryCtrl')
app.use(express.json())

app.get('/api/macros', entryCtrl.getMeals)

app.post('/api/macros/', entryCtrl.addMeals)

app.put('/api/macros/:id', entryCtrl.editMeal)

app.delete('/api/macros/:id', entryCtrl.deleteMeal)

app.listen(port, () => console.log(`My server is running on port ${port}!`))

// 1 import express 
// 2 assign express to variable app and declare a port
// 3 app.use(express.json())
// 4 creat app.listen
// 5 create controllers and import them
// 5 declare them above the app.listen