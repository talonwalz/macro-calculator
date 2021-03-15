import React, {Component} from 'react'
import MealEntry from './MealEntry'


class List extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render () {
            const {mealsToDisplay} = this.props
            const meals = mealsToDisplay.map((e, i) => {
                // console.log(mealsToDisplay)
                return (
                <section className="child-entry" key={e.id}>
                    <div className="box meal" >Meal: {e.id}</div>
                    <div className="box" >{e.meal}</div>
                    <div>index:{i}</div>
                    <div className="box" >{e.protein}</div>
                    <div className="box" >{e.carbs}</div>
                    <div className="box" >{e.fats}</div>
                    <button className="btn" >Edit</button>
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