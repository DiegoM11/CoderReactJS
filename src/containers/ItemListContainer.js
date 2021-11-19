import React from "react";

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: 'Bienvenidos!',
    };
  }


  render() {
    return (
      <div>
        <h1>{this.state.greetings}</h1>
      </div>
    );
  }
}

export default ItemListContainer;
