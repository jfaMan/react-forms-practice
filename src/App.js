import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      description: "",
      isAustralian: false,
      gender: "",
      favColor: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  // THE NAME AND VALUE ATTRIBUTES ABOVE WERE PULLED OUT OF THE TARGET AND ASSIGNED AS VARIABLES. Same as below:
  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  render() {
    return (
      <div className="container mt-5 text-center">
        <form className="container">
          <h1>Forms Practice</h1>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br/>
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
          <button className=" btn btn-primary">Submit</button>
        </form>
        <div className="results container mt-5">
          <h1>Full name: {this.state.firstName} {this.state.lastName}</h1>
          <h2>About you: {this.state.description}</h2>
          <h2>Nationality: {this.state.isAustralian ? "Australian" : "Other"}</h2>
          <h2>Sex: {this.state.gender}</h2>
          <h2>Favorite color: {this.state.favColor}</h2>
        </div>
      </div>
    )
  }
}


export default App;