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
                <h1>{this.props.meals}</h1>
            </section>
        )
    }
}

export default MealEntry