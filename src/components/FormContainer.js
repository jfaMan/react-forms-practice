import React from "react";
import FormComponent from "./FormComponent";

class Form extends React.Component {
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
      <FormComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}    
      />
    )
  }
}


export default Form;
