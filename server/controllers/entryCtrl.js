const meals = []
let id = 1

module.exports = {
    // GET
    getMeals: (req, res) => {
        res.status(200).send(meals)
    },
    // PUT
    addMeals: (req, res) => {
       const {newMeal} = req.body 

       newMeal.id = id
       id++
       meals.push(newMeal)
       res.status(200).send(meals)
    },
    // POST
    editMeal: (req, res) => {
        const {id} = req.params
        const {changeMeal} = req.body
        let index = null;
        meals.forEach((meal, i) => {
            if (meal.id === +id) index = i;
        })
        meals[index] = {
            id: meals[index].id,
            meal: changeMeal.meal || meals[index].meal,
            protein: changeMeal.protein || meals[index].protein,
            carbs: changeMeal.carbs || meals[index].carbs,
            fats: changeMeal.fats || meals[index].fats
        }
        res.status(200).send(meals)
    },
    // DELETE
    deleteMeal: (req, res) => {
        const {id} = req.params
        const index = meals.findIndex(elem => elem.id === +id)
        meals.splice(index, 1)
        res.status(200).send(meals)
    }
}

// 1 GET this handler will send the meals arrray
// 2 PUT this handler will take in an object, assign an id to it and put it in to the meals array and then increment the id by one for the next object
// 3 POST this handler will allow me to edit each object in the array by receivng an id and finding that the index of that id and then changing the information that has been sent in the new body object
// 4 DELETE this handler will take in an id and match it to the object that has the same id and remove it from the array

