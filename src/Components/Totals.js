import React from 'react'

const Totals = (props) => {
    const proteinTotal = props.proteinTotal
    const carbsTotal = props.carbsTotal
    const fatsTotal = props.fatsTotal
    const totalCalories = ((proteinTotal * 4) + (carbsTotal * 4) + (fatsTotal * 9))
    return (
        <section className="totals">
            <div></div>
            <div></div>
        <h1 className="macroTotal">Protein: {proteinTotal} g</h1>
        <h1 className="macroTotal">Carbs: {carbsTotal} g</h1> 
        <h1 className="macroTotal">Fats: {fatsTotal} g</h1> 
        <h1 className="underline">{totalCalories} calories</h1>
        </section>
    )
}

export default Totals

// 1 setup Totals a functional Component
// 2 destructure the props
// 3 create a variable called totalCalories that will calculate calories from macros 
// 3 return a section with h1s displaying each total 