import React, { Component } from "react";

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

class FriendListApp extends Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };
  }

  handleSubmit = event => {
    event.preventDefault();
    var name = this.refs.name.value;
    var age = this.refs.age.value;
    var friendsTemp = this.state.friends;

    fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age })
    })
      .then(res => res.json())
      .then(response => {
        friendsTemp.push(response.data)
        this.setState({ friends: friendsTemp })
        this.refs.name.value = ""
        this.refs.age.value = ""
        console.log(response)
      })
  }

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Enter a Friend!</h3>
            <fieldset className="form-group">
              <label>Friend's Name:</label>
              <input
                type="text"
                ref="name"
                name="name"
                className="form-control"
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Friend's Email:</label>
              <input
                type="text"
                ref="email"
                name="email"
                className="form-control"
              />
            </fieldset>
            <button className="btn btn-success" type="submit">
              Save Friend
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendListApp;