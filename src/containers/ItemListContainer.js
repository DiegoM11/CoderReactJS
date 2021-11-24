import React from "react";

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: 'Bienvenidos a NBA Store!',
    };
  }


  render() {
    return (
      <div>
        <h1>{this.props.greetings}</h1>
      </div>
    );
  }
}

export default ItemListContainer;
