import React from 'react';
class UserChild extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    console.log(this.props.name + " component mount");
  }
  render () {
    const {name} = this.props;
    return (
      <div className="child-card">
           {name}
      </div>
    )
  }
};

export default UserChild;