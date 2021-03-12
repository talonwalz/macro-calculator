const express = require('express')
const app = express()
const port = 3333
const entryCtrl = require('./controllers/entryCtrl')
app.use(express.json())

app.get('/api/macros', entryCtrl.getMeals)

app.post('/api/macros/', entryCtrl.addMeals)

// app.put('/api/macros/:id', EntryCtrl.editMeal)

app.delete('/api/macros/:id', entryCtrl.deleteMeal)

app.listen(port, () => console.log(`My server is running on port ${port}!`))