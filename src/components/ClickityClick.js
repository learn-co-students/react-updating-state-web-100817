import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    if (this.state.hasBeenClicked === true){
      this.setState({hasBeenClicked: false})
    }
    else {
    this.setState({
      hasBeenClicked: true
    })
    }
  }


  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
