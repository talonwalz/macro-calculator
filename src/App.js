import './App.css';
import { Component } from 'react';
import axios from 'axios'
import Header from './Components/Header'
import List from './Components/List'
import Totals from './Components/Totals'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mealsToDisplay: [],
      mealInput: ``,
      proteinInput: ``,
      carbsInput: ``,
      fatsInput: ``
    }
    this.handleMeals = this.handleMeals.bind(this)
    this.handleProtein = this.handleProtein.bind(this)
    this.handleCarbs =this.handleCarbs.bind(this)
    this.handleFats = this.handleFats.bind(this)
    this.addMeal = this.addMeal.bind(this)
    this.deleteMeal = this.deleteMeal.bind(this)
  }



  handleMeals(event) {
    this.setState({mealInput: event.target.value})
  }
  handleProtein(event) {
    this.setState({proteinInput: event.target.value})
  }
  handleCarbs(event) {
    this.setState({carbsInput: event.target.value})
  }
  handleFats(event) {
    this.setState({fatsInput: event.target.value})
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
      fatsInput: ``
    })
    console.log(newMeal)
    axios.post('/api/macros', {newMeal})
    .then(res => {
      console.log(res.data)
      this.setState({mealsToDisplay: res.data})
    })
    .catch(err => console.log(err))
  }

// PUT 

// DELETE
  deleteMeal(id) {
    axios.delete(`/api/macros/${id}`)
  }



  render() {
  return (
    <div className="App">
      <Header/>
      <input value={this.state.mealInput}
      onChange={this.handleMeals} 
      placeholder="meal"/>
      <input value={this.state.proteinInput}
      onChange={this.handleProtein}
      placeholder="PROTEIN"/>
      <input value={this.state.carbsInput}
      onChange={this.handleCarbs}
      placeholder="CARBOHYDRATES"/>
      <input value={this.state.fatsInput} 
      onChange={this.handleFats}
      placeholder="FATS"/>
      <button onClick={this.addMeal}>ADD Meal</button>
      <List 
      mealsToDisplay={this.state.mealsToDisplay}
      deleteMeal={this.deleteMeal}/>
      <Totals mealsToDisplay={this.state.mealsToDisplay}/>
    </div>
  );
  }
}

export default App;
