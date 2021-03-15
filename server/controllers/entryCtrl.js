const meals = []
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
    editMeal: (req, res) => {
        const {id} = req.params
        const {meal, protein, carbs, fats} = req.body
        let index = null;
        meals.forEach((meal, i) => {
            if (meal.id === +id) index = i;
        })
        meals[index] = {
            id: meals[index].id,
            meal: meal || meals[index].meal,
            protein: protein || meals[index].protein,
            carbs: carbs || meals[index].carbs,
            fats: fats || meals[index].carbs
        }
        res.status(200).send(meals)
    },

    deleteMeal: (req, res) => {
        const {id} = req.params
        const index = meals.findIndex(elem => elem.id === +id)
        meals.splice(index, 1)
        res.status(200).send(meals)
    }
}