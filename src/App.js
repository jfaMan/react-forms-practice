import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  // THE NAME AND VALUE ATTRIBUTES ABOVE WERE PULLED OUT OF THE TARGET AND ASSIGNED AS VARIABLES. Same as below:
  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Form Practice</h1>
        <form>
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
          <h1>Full name: {this.state.firstName} {this.state.lastName}</h1>
        </form>
      </div>
    )
  }
}


export default App;