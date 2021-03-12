import React, { Component } from 'react'


class Totals extends Component {
    constructor() {
        super()
        this.state = {
            proteinTotal: 0,
            carbsTotal: 0,
            fatsTotal: 0
        }
    }
    getProteinTotal() {
        const {mealsToDisplay} = this.props
        mealsToDisplay.map(e => {
          return this.setState({proteinTotal: this.proteinTotal += e.protein}) 
        })
    }
    getCarbsTotal() {
        const {mealsToDisplay} = this.props
        mealsToDisplay.map(e => {
          return this.setState({carbsTotal: this.carbTotal += e.carbs}) 
        })
    }
    getFatsTotal() {
        const {mealsToDisplay} = this.props
        mealsToDisplay.map(e => {
          return this.setState({proteinTotal: this.fatsTotal += e.fats}) 
        })
    }

    render() {
    return (
        <footer>
            <h1>I will be the totals bar</h1>
        </footer>
    )
    }
}

export default Totals