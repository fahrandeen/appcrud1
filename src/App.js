import React, { Component } from 'react';
import './App.css';
import FoodItemList from './components/FoodItemList';
import EditFoodItemForm from './components/EditFoodItemForm';
import AddFoodItemForm from './components/AddFoodItemForm';

class App extends Component {

  constructor() {
    super()
    this.state = {
      id: null,
      userId: 1,
      food: '',
      cost: '',
      status: false,
      foodItem: {},
      foodItems: [
        { id: 1, userId: 1, food: 'Rice', cost: 100, status: false },
        { id: 2, userId: 1, food: 'Beans', cost: 200, status: true }
      ],
      editing: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this)
    this.deleteFoodItem = this.deleteFoodItem.bind(this)
    this.editFoodItem = this.editFoodItem.bind(this)
    this.updateFoodItem = this.updateFoodItem.bind(this)
    this.boughtFoodItem = this.boughtFoodItem.bind(this)
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  addFoodItem(event) {
    event.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,
      userId: this.state.userId,
      status: this.state.status
    }
    this.setState({
      food: '',
      cost: '',
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem]

    })
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter(item => item.id !== id);
    this.setState({
      foodItems: foodItems,
      food: '',
      cost: ''

    });
  }

  editFoodItem(foodItem) {
    console.log({...foodItem})
    this.setEditing(true)
    this.setState({
      food: foodItem.food,
      cost: foodItem.cost,
      foodItem: foodItem
    })
  }

  setEditing(value) {
    if (typeof value !== 'boolean') {
      throw "This value must either be true or false"
    }
    this.setState({
      editing: value
    })
  }

  updateFoodItem(event) {
    event.preventDefault();
    const updatedFood = this.state.food
    const updatedCost = this.state.cost
    console.log(updatedFood+"--"+updatedCost)
    const updatedFoodItem = {...this.state.foodItem, cost: updatedCost, food: updatedFood}
    const foodItems = this.state.foodItems.map((foodItem) =>
      (foodItem.id === this.state.foodItem.id ? updatedFoodItem : foodItem));
    this.setState({
      foodItems: foodItems,
      food: '',
      cost: '',
      editing:false
    })
  }


  boughtFoodItem(currentFoodItem) {
    const updatedCurrentFood = {...currentFoodItem, status: true};
    console.log(updatedCurrentFood)
    const foodItems = this.state.foodItems.map((foodItem) => 
      (foodItem.id === currentFoodItem.id ? updatedCurrentFood : foodItem));
    //console.log(foodItems)
    this.setState({foodItems: foodItems})
  }


  render() {
    const { cost, food, foodItems, editing } = this.state;
    return (
      <div className="App">
        <div className="row App-main">
          <FoodItemList
            foodItems={foodItems}
            deleteFoodItem={this.deleteFoodItem}
            boughtFoodItem={this.boughtFoodItem}
            editFoodItem={this.editFoodItem}
          />
        </div>

        <div className="row App-main">
          {
            editing ? (
              <EditFoodItemForm
                food={food}
                cost={cost}
                handleInputChange={this.handleInputChange}
                setEditing={this.setEditing}
                updateFoodItem={this.updateFoodItem}
              />
            ) : (
                <AddFoodItemForm
                  food={food}
                  cost={cost}
                  handleInputChange={this.handleInputChange}
                  addFoodItem={this.addFoodItem}
                />
              )
          }
        </div>
      </div>
    );
  }

}

export default App;
