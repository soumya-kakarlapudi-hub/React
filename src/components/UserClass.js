import React from "react";
class UserClass extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo : {
        name : "dummy name",
        location : "Germany",
        avatar_url: null
      }
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/soumya-kakarlapudi-hub");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo : json
    })
  }
  render () {
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="git-image" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location:{location} </h3>
      </div>
    )
  }
};

export default UserClass;