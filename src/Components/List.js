import React, {Component} from 'react'
import MealEntry from './MealEntry'


class List extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.displayMeals = this.displayMeals.bind(this)
    }
    displayMeals() {
        const {mealsToDisplay} = this.props
        return mealsToDisplay.map(e => {
            return (
            <section key={e.id}>
                <div>{e.id}</div>
                <div>{e.meal}</div>
                <div>{e.protein}</div>
                <div>{e.carbs}</div>
                <div>{e.fats}</div>
             </section>
            )
        })
    }
    render () {
        return (
            <article>
                {this.displayMeals()}
                <MealEntry/>
            </article>
        )
    }
}

export default List