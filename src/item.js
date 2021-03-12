// item.jsx
import React, { Component } from "react";
import {SortableElement} from 'react-sortable-hoc';

export default class Item extends Component {

  handle = ()=>{
    console.log("log")
  }

  render() {
    const SortableItem = SortableElement(({item, handle}) => {
      return (
        <div 
          style={{
            border: '2px solid #F00',
            background: '#0DD',
            padding: '10px',
            marginBottom: '10px'
          }}
          onClick={handle}
        >
          {item}
        </div>
      );
    });

    return <SortableItem 
              index={this.props.index} 
              item={this.props.item}
              handle={this.handle}
            />;
  }
}