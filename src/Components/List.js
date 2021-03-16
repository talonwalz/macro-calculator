import React, {Component} from 'react'
import MealEntry from './MealEntry'

class List extends Component {
    constructor() {
        super()
        this.state = {
            meals: ``
        }
    }
// RENDER
    render () {
            const {mealsToDisplay} = this.props
            const meals = mealsToDisplay.map((e, i) => {
                return (
                <section className="child-entry" key={e.id}>
                    <div className="box1" >{e.meal}</div>
                    <div className="box" >{e.protein}</div>
                    <div className="box" >{e.carbs}</div>
                    <div className="box" >{e.fats}</div>
                    <button className="btn" onClick={() => this.props.editMeal(mealsToDisplay[i].id)}>Edit</button>
                    <button className="btn" onClick={() => this.props.deleteMeal(mealsToDisplay[i].id, i)}>Delete</button>
                 </section>
                )
            })
        return (
            <article className="parent-entry">
                <MealEntry meals={meals}/>
            </article>
        )
    }
}

export default List

// 1 import React, {Component}
// 2 set up List as a class Component, don't need any state
// 3 destructure props - mealsToDisplay
// 4 under render but above return assign variable meals to map through mealsToDisplay and return each element of object as a different div and add buttons for edit and delete 
// 5 assign editMeal to an anonymous onCLick to the edit button and pass in mealsToDisplay[i].id
// 6 assign deleteMeal to an anonymous onClick to the delete button and pass in mealsToDisplay[i].id
// 7 return MealEntry component and pass meals as props to MealEntry
// import MealEntry