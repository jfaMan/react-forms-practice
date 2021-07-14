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
      dietVeg: "",
      dietLac: "",
      dietAll: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleSubmit() {
    alert (
      "First name": {this.state.firstName});
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
        <form onSubmit={this.handleSubmit} className="questions shadow border">
          <h1>Passenger</h1>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeHolder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>
          <label>Destination:</label>
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="australia">Australia</option>
            <option value="thailand">Thailand</option>
            <option value="singapore">Singapore</option>
          </select>
          <label>
            <input
              type="checkbox"
              name="dietVeg"
              checked={this.state.dietVeg}
              onChange={this.handleChange}
            />Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="dietLac"
              checked={this.state.dietLac}
              onChange={this.handleChange}
            />Lactose Intolerant
          </label>
          <label>
            <input
              type="checkbox"
              name="dietAll"
              checked={this.state.dietAll}
              onChange={this.handleChange}
            />Food Allergies
          </label>
          <button className="btn btn-primary">Submit</button>
        </form>
        <div className="results shadow border">
          <h1>Your Details</h1>
          <ul>
            <li>Full name: {this.state.firstName} {this.state.lastName}</li>
            <li>Age: {this.state.age}</li>
            <li>Gender: {this.state.gender}</li>
            <li>Destination: {this.state.destination}</li>
            <li>Additional details: {this.state.details}</li>
            <li>Dietery Restrictions: {this.state.dietVeg}</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default App;

{/* <br/>
<br/>
<input
  type="text"
  name="lastName"
  value={this.state.lastName}
  placeholder="Last Name"
  onChange={this.handleChange}
/>
<br/>
<br />
<textarea
  name="description"
  value={this.state.description}
  placeholder="Describe yourself"
  onChange={this.handleChange}
/>
<br />
<br />
<label>
  <input
    type="checkbox"
    name="isAustralian"
    checked={this.state.isAustralian}
    onChange={this.handleChange}
  /> Are you Australian?
</label>
<br />
<br />
<label>
  <input
    type="radio"
    name="gender"
    value="male"
    checked={this.state.gender === "male"}
    onChange={this.handleChange}
  /> Male
</label>
<label>
  <input
    type="radio"
    name="gender"
    value="female"
    checked={this.state.gender === "female"}
    onChange={this.handleChange}
  /> Female
</label>
<br />
<br />
<label>Favorite color:</label>
<select
  name="favColor"
  value={this.state.favColor}
  onChange={this.handleChange}
>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="red">Red</option>
</select>
<br />
<button className="btn btn-primary">Submit</button> */}