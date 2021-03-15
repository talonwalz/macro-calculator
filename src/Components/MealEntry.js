import React, {Component} from 'react'


class MealEntry extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        return (
            <section>
                <h3>{this.props.meals}</h3>
            </section>
        )
    }
}

export default MealEntry