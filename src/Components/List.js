import React, {Component} from 'react'
import MealEntry from './MealEntry'


class List extends Component {
    constructor() {
        super()
        this.state = {
            newMeal: ``,
            newProtein: ``,
            newCarbs: ``,
            newFats: ``
        }
    }
    changeMeal(e) {
        this.setState({newMeal: e.target.value})
    }
    changeProtein(e) {
        this.setState({newProtein: e.target.value})
    }
    changeCarbs(e) {
        this.setState({newCarbs: e.target.value})
    }
    changeFats(e) {
        this.setState({newFats: e.target.value})
    }


    render () {
    
            const {mealsToDisplay} = this.props
            const meals = mealsToDisplay.map((e, i) => {
                // console.log(mealsToDisplay)
                return (
                <section className="child-entry" key={e.id}>
                    {/* <div className="box meal" >Meal: {e.id}</div> */}
                    <div className="box1" >Meal: {e.meal}</div>
                    {/* <div>index:{i}</div> */}
                    <div className="box" >{e.protein}</div>
                    <div className="box" >{e.carbs}</div>
                    <div className="box" >{e.fats}</div>
                    <button className="btn" onClick={() => this.props.editMeal( mealsToDisplay[i], this.state.newMeal, this.state.newProtein, this.state.newCarbs, this.state.newFats)}>Edit</button>
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