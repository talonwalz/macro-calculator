// import React, { Component } from 'react'

const Totals = (props) => {
    const proteinTotal = props.proteinTotal
    return (
        <h2>{proteinTotal}</h2>
    )
}




// class Totals extends Component {
//     constructor() {
//         super()
//         this.state = {
            
//         }
//     }
//     getProteinTotal() {
//         const {mealsToDisplay} = this.props
//         mealsToDisplay.map(e => {
//           return this.setState({proteinTotal: this.proteinTotal += e.protein}) 
//         })
//     }
//     getCarbsTotal() {
//         const {mealsToDisplay} = this.props
//         mealsToDisplay.map(e => {
//           return this.setState({carbsTotal: this.state.carbsTotal + 
//             +e.carbs}) 
//         })
//     }
//     getFatsTotal() {
//         const {mealsToDisplay} = this.props
//         mealsToDisplay.map(e => {
//           return this.setState({proteinTotal: this.fatsTotal += e.fats}) 
//         })
//     }

//     render() {
//         // console.log(this.props.mealsToDisplay)
//     return (
//         <footer className="footer">
//             <h1>I am the totals</h1>
//         </footer>
//     )
//     }
// }

export default Totals