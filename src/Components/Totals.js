// import React, { Component } from 'react'

const Totals = (props) => {
    const proteinTotal = props.proteinTotal
    const carbsTotal = props.carbsTotal
    const fatsTotal = props.fatsTotal
    const total = ((proteinTotal * 4) + (carbsTotal * 4) + (fatsTotal * 9))
    return (
        <section className="totals">
            <div></div>
            <div></div>
        <h1 className="macroTotal">Protein: {proteinTotal} g</h1>
        <h1 className="macroTotal">Carbs: {carbsTotal} g</h1> 
        <h1 className="macroTotal">Fats: {fatsTotal} g</h1> 
        <h1 className="underline">{total} calories</h1>
        </section>
    )
}

export default Totals