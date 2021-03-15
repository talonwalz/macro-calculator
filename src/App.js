import './App.css';
import { Component } from 'react';
import axios from 'axios'
import Header from './Components/Header'
import List from './Components/List'
import Totals from './Components/Totals'
// import express from 'express';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mealsToDisplay: [],
      index: ``,
      mealInput: ``,
      proteinInput: ``,
      carbsInput: ``,
      fatsInput: ``,
      proteinTotal: 0,
      carbsTotal: 0,
      fatsTotal: 0
    }
    this.handleMeals = this.handleMeals.bind(this)
    this.handleProtein = this.handleProtein.bind(this)
    this.handleCarbs =this.handleCarbs.bind(this)
    this.handleFats = this.handleFats.bind(this)
    this.addMeal = this.addMeal.bind(this)
    this.deleteMeal = this.deleteMeal.bind(this)
  }



  handleMeals(e) {
    this.setState({mealInput: e.target.value})
    
  }
  handleProtein(e) {
    this.setState({proteinInput: e.target.value})
  }
  handleCarbs(e) {
    this.setState({carbsInput: e.target.value})
  }
  handleFats(e) {
    this.setState({fatsInput: e.target.value})
  }


// GET
  componentDidMount() {
    axios.get('/api/macros')
    .then(res => {
      console.log(res.data)
      this.setState({mealsToDisplay: res.data})
    })
    .catch(err => console.log(err))
  }

// POST
  addMeal() {
    let newMeal = {
      meal: this.state.mealInput,
      protein: this.state.proteinInput,
      carbs: this.state.carbsInput,
      fats: this.state.fatsInput
    }
    this.setState({
      mealInput: ``,
      proteinInput: ``,
      carbsInput: ``,
      fatsInput: ``,
      proteinTotal: this.state.proteinTotal + +this.state.proteinInput
      // add same for carbs and fats
    })
    console.log(newMeal)
    axios.post('/api/macros', {newMeal})
    .then(res => {
      // console.log(res.data)
      console.log(this.state.proteinTotal)
      this.setState({mealsToDisplay: res.data})
    })
    .catch(err => console.log(err))
  }

// PUT 

// DELETE
  deleteMeal(id, index) {
    axios.delete(`/api/macros/${id}`)
    .then(res => {
      // const index = res.data.filter((meal) => meal.id === id)
      console.log(res.data[index])
      this.setState({
        mealsToDisplay: res.data,
        proteinTotal: this.state.proteinTotal - (+res.data[index].protein -1)
      })
    })
    .catch(err => console.log(err))
  }



  render() {
  return (
    <div className="App">
      <Header/>
      <section className="inputBar">
      <input className="mealInput" value={this.state.mealInput}
      onChange={this.handleMeals} 
      placeholder="MEAL"/>
      <input value={this.state.proteinInput}
      onChange={this.handleProtein}
      placeholder="PROTEIN"/>
      <input value={this.state.carbsInput}
      onChange={this.handleCarbs}
      placeholder="CARBS"/>
      <input value={this.state.fatsInput} 
      onChange={this.handleFats}
      placeholder="FATS"/>
      <button onClick={this.addMeal}>ADD Meal</button>
      </section>
      <List 
      mealsToDisplay={this.state.mealsToDisplay}
      deleteMeal={this.deleteMeal}
      index={this.state.index}/>
      <Totals proteinTotal={this.state.proteinTotal}/>
    </div>
  );
  }
}

export default App;
