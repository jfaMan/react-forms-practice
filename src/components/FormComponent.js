import React from "react"

const FormComponent = (props) => {
  return (
    <div className="container-main">
        <form className="questions shadow border">
          <h1>Passenger Info</h1>
          <input
            type="text"
            name="firstName"
            value={props.data.firstName}
            placeholder="First Name"
            onChange={props.handleChange}
          />
          <br />          
          <input
            type="text"
            name="lastName"
            value={props.data.lastName}
            placeholder="Last Name"
            onChange={props.handleChange}
          />
          <br />
          <input
            type="number"
            name="age"
            value={props.data.age}
            placeholder="Age"
            onChange={props.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={props.data.gender === "Male"}
              onChange={props.handleChange}
            /> Male
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={props.data.gender === "Female"}
              onChange={props.handleChange}
            /> Female
          </label>
          <br />
          <select
            name="destination"
            value={props.data.destination}
            onChange={props.handleChange}
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
              checked={props.data.isVegetarian}
              onChange={props.handleChange}
            /> Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseIntolerant"
              checked={props.data.isLactoseIntolerant}
              onChange={props.handleChange}
            /> Lactose Intolerant
          </label>
          <label>
            <input
              type="checkbox"
              name="isAllergic"
              checked={props.data.isAllergic}
              onChange={props.handleChange}
            /> Food Allergies
          </label>
          <br />
          <textarea
            name="additionalDetails"
            value={props.data.additionalDetails}
            placeholder="Additional details..."
            onChange={props.handleChange}
            rows="3"
            cols="30"
          />
        </form>
        <form onSubmit={props.handleSubmit} className="results shadow border">
          <h1>Confirmation</h1>
            <p>Full name: <b>{props.data.firstName} {props.data.lastName}</b></p>
            <p>Age: <b>{props.data.age}</b></p>
            <p>Gender: <b>{props.data.gender}</b></p>
            <p>Destination: <b>{props.data.destination}</b></p>
            <p>Vegetarian: <b>{props.data.isVegetarian ? "Yes" : "No"}</b></p>
            <p>Lactose Intolerant: <b>{props.data.isLactoseIntolerant ? "Yes" : "No"}</b></p>
            <p>Allergic: <b>{props.data.isAllergic ? "Yes" : "No"}</b></p>
            <p>Additional details: <b>{props.data.additionalDetails}</b></p>
          <hr />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
  )
}

export default FormComponent