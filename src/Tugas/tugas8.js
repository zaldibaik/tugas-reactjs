import { Card, Button } from "flowbite-react";
import React, { Component } from 'react';

class Tugas8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container mx-auto justify-center">
       <div className="h3">Tugas8</div>
      <Card>
        <p>{count}</p>
        {count > 10 ? (
          <p>sudah lebih dari 10</p>
        ) : (
          <Button className='btn' onClick={this.handleIncrement}>Tambah</Button>
        )}
      </Card>
      </div>
    );
  }
}

export default Tugas8;
