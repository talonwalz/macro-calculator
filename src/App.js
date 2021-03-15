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
      index: ``,
      mealInput: ``,
      proteinInput: ``,
      carbsInput: ``,
      fatsInput: ``,
      proteinTotal: 0,
      carbsTotal: 0,
      fatsTotal: 0
    }
    //bindMethods
    this.handleMeals = this.handleMeals.bind(this)
    this.handleProtein = this.handleProtein.bind(this)
    this.handleCarbs =this.handleCarbs.bind(this)
    this.handleFats = this.handleFats.bind(this)
    this.addMeal = this.addMeal.bind(this)
    this.deleteMeal = this.deleteMeal.bind(this)
    this.editMeal = this.editMeal.bind(this)
  }
// HandleInputBoxes
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
      // console.log(res.data)
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
      proteinTotal: this.state.proteinTotal + +this.state.proteinInput,
      carbsTotal: this.state.carbsTotal + +this.state.carbsInput,
      fatsTotal: this.state.fatsTotal + +this.state.fatsInput
    })
    axios.post('/api/macros', {newMeal})
    .then(res => {
      this.setState({mealsToDisplay: res.data})
    })
    .catch(err => console.log(err))
  }
//PUT
editMeal(id) {
  let changeMeal = {
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
  })
  axios.put(`/api/macros/${id}`, {changeMeal})
  .then(res => {

    const proteinReducer = (acc, cur) => acc + +cur.protein
    const proteinTtl = res.data.reduce(proteinReducer, 0)
    const carbReducer = (acc, cur) => acc + +cur.carbs
    const carbTtl = res.data.reduce(carbReducer, 0)
    const fatsReducer = (acc, cur) => acc + +cur.fats
    const fatsTtl = res.data.reduce(fatsReducer, 0)
    this.setState({
      mealsToDisplay: res.data,
      proteinTotal: proteinTtl,
      carbsTotal: carbTtl,
      fatsTotal: fatsTtl
    })
  })
  .catch(err => console.log(err))
}
// DELETE
  deleteMeal(id) {
    axios.delete(`/api/macros/${id}`)
    .then(res => {
      const proteinReducer = (acc, cur) => acc + +cur.protein
      const proteinTtl = res.data.reduce(proteinReducer, 0)
      const carbReducer = (acc, cur) => acc + +cur.carbs
      const carbTtl = res.data.reduce(carbReducer, 0)
      const fatsReducer = (acc, cur) => acc + +cur.fats
      const fatsTtl = res.data.reduce(fatsReducer, 0)
      this.setState({
        mealsToDisplay: res.data,
        proteinTotal: proteinTtl,
        carbsTotal: carbTtl,
        fatsTotal: fatsTtl
      })
    })
    .catch(err => console.log(err))
  }
// RENDER
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
      <button className="btn" onClick={this.addMeal}>Add Meal</button>
      </section>
      <List 
      mealsToDisplay={this.state.mealsToDisplay}
      deleteMeal={this.deleteMeal}
      editMeal={this.editMeal}
      index={this.state.index}/>
      <Totals 
      proteinTotal={this.state.proteinTotal}
      carbsTotal={this.state.carbsTotal}
      fatsTotal={this.state.fatsTotal}
      />
    </div>
  );
  }
}

export default App;

// 1 setup the App.js as a class component
// 2 create the onchange funcctions for the input fields (put these input variables into state)
// 3 bind these functions and call them in each input tag and assign input to value of each input
//4 GET function (can be requested through componentDidMount) set a property of state to equal mealsToDisplay and in function reassign this state to res.data through axios
//5 POST function will create a new meal entry - inside function declare a variable object that assigns handlechanges to a property in an object, once this is done reset input boxes, then assign macro input to macro totals 
// 6 PUT function will take in an id and allow you to edit it using the same input boxes, set a variable called changeMeal equal to the inputs and send it as a body in the PUT axios request, reset input variables and total up macros using reduce method on res.data, set total states equal to this
// 7 DELETE function will take in an id and delete that entry, and then sum up the totals again and set state for the totals again 
// 8 bind the edit and delete function and then pass them with mealsToDisplay as props to List
// 9 pass macro totals as props to Totals
// import all Components used