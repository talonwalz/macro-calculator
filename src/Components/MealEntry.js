import React, {Component} from 'react'

class MealEntry extends Component {
// RENDER
    render() {
        const {meals} = this.props
        return (
            <section>
                <h3>{meals}</h3>
            </section>
        )
    }
}

export default MealEntry

// 1 import React, {Component} 
// 2 destructure props
// 3 return a section that has an h3 tag displaying meals