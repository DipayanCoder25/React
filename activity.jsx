import React from 'react'


class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Reena",
      grade: 5,
      fav_subj: "Math",
      fav_color: "Red"
    };
  }
  
  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <p>My name is {this.state.name}</p>
        <p>I'm in grade {this.state.grade} </p>
        <p> My fav color {this.state.fav_color}</p>
        <p>My fav subj is {this.state.fav_subj}</p>
      </div>
    );
  }
}

export default Student;
