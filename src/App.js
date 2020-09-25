import React from 'react';
import './App.css';
import Item1 from '../src/Component/Item1.js'
import Card from '../src/Component/Card.js'
import './Component/Draft.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    const { } = this.state;
    return(
    <div>
    <Item1 className ="my-button1" />
    <div className ="rows2-2">
    <Card value ='Government Initiative' />
    <Card value ='Training Team' />
    </div>
      </div>
    );
  };
};
export default App