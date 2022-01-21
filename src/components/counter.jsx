import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  // constructor() {
  //   //in the constructor you need to first call the super or the constructor of the prant class
  //   //in this case the parent class is React.Component
  //   super();
  //   //The following bidn ensure st that in all calls of handleIncrement, this refers to the this window object
  //   //of the counter class
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // } // or you can convert the handleIncrement to an arrow function.

  //If you have a constructor and you need to use props, you need to define props inside the constructor
  // constructor(props) {
  //   super(props);
  //    this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    //console.log("Increment Clicked", this.state.count);
  };

  render() {
    //This is a JS ohject that has all the attributes that we set in the counters component.
    //Specifically the value and selected attributest that we are adding to each Counter object inside the <div>
    console.log("props", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

//We can have both styles and classes but he is going to use onlyclasses in this tutorial. So I will keep the styles as a reference #for myself. This is defining a style above and using it here
//<span style={this.styles} className="badge badge-primary m-2">
// Thi is refining a style inline.
//         <button style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">
// This is how you add an image
// <img src={this.state.imageUrl} alt="" />
//The map methins inside the xml code renders the items in the list.
// <ul>
//   {this.state.tags.map((tag) => (
//belowe tells react how to map the items inside tag.
//     <li key={tag.id}>{tag}</li>
//   ))}
// </ul>
//The tag of <ul> means unordered list
//In the ocClick we cannot pass a funciton call but only a fucntion reference that is why when I put () at the end of handleIncrement it failed
//Therefore we cannot pass it a paramater either.
// { <button
//           onClick={this.handleIncrement} }
//Above function can't get a parameter but what we can do we can replace it with a paranthesis function call to the handleIncrement function
//And that () function can get a parameter.
//onClick={() => this.handleIncrement({ id: 1 })}
//This is what I had at the end to show some tags but it seems like I needed to remove it, this was right afger Button closed in xml portion
// {this.state.tags.length === 0 && <p>Please create a new tag</p>}
// {this.renderTags()}
export default Counter;
