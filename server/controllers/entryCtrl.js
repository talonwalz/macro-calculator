const meals = [`test`]
let id = 1

module.exports = {

    getMeals: (req, res) => {
        res.status(200).send(meals)
    },

    addMeals: (req, res) => {
       const {newMeal} = req.body 

       newMeal.id = id
       id++
       meals.push(newMeal)
       res.status(200).send(meals)
    },

//     editMeal:

    deleteMeal: (req, res) => {
        const {id} = req.params
        const index = meals.findIndex(elem => elem.id === +id)
        meals.splice(index, 1)
        res.status(200).send(meals)
    }
}