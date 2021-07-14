import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegetarian: "",
      isLactoseIntolerant: "",
      isAllergic: "",
      additionalDetails: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked }) : this.setState({[name]: value})
  }

  handleSubmit() {
    const maleOrFemale = this.state.gender === "Male" ? "Mr." : "Ms.";
    alert (
      `Thank you for submitting the form, ${maleOrFemale} ${this.state.lastName}.`
    );
  }

  // THE NAME AND VALUE ATTRIBUTES ABOVE WERE PULLED OUT OF THE TARGET AND ASSIGNED AS VARIABLES. Same as below:
  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  render() {
    return (
      <div className="container-main">
        <form className="questions shadow border">
          <h1>Passenger Info</h1>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />          
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            /> Male
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            /> Female
          </label>
          <br />
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">--Select a destination--</option>
            <option value="Australia">Australia</option>
            <option value="Thailand">Thailand</option>
            <option value="Singapore">Singapore</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegetarian"
              checked={this.state.isVegetarian}
              onChange={this.handleChange}
            /> Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseIntolerant"
              checked={this.state.isLactoseIntolerant}
              onChange={this.handleChange}
            /> Lactose Intolerant
          </label>
          <label>
            <input
              type="checkbox"
              name="isAllergic"
              checked={this.state.isAllergic}
              onChange={this.handleChange}
            /> Food Allergies
          </label>
          <br />
          <textarea
            name="additionalDetails"
            value={this.state.additionalDetails}
            placeholder="Additional details..."
            onChange={this.handleChange}
            rows="3"
            cols="30"
          />
        </form>
        <form onSubmit={this.handleSubmit} className="results shadow border">
          <h1>Confirmation</h1>
            <p>Full name: <b>{this.state.firstName} {this.state.lastName}</b></p>
            <p>Age: <b>{this.state.age}</b></p>
            <p>Gender: <b>{this.state.gender}</b></p>
            <p>Destination: <b>{this.state.destination}</b></p>
            <p>Vegetarian: <b>{this.state.isVegetarian ? "Yes" : "No"}</b></p>
            <p>Lactose Intolerant: <b>{this.state.isLactoseIntolerant ? "Yes" : "No"}</b></p>
            <p>Allergic: <b>{this.state.isAllergic ? "Yes" : "No"}</b></p>
            <p>Additional details: <b>{this.state.additionalDetails}</b></p>
          <hr />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default App;
