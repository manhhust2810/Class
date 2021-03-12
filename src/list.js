// list.jsx
import React, { Component } from "react";
import {SortableContainer} from 'react-sortable-hoc';
import Item from './item';

export default class List extends Component {
  render() {
    const SortableList = SortableContainer(({items}) => {
      let list_items = items.map((item, index) => {
        return <Item item={item} index={index} key={index} />;
      });

      return (
        <div style={{background: '#FF0'}}>{list_items}</div>
      );
    });

    return (
      <SortableList 
        items={this.props.items} 
        onSortEnd={this.props.onSortEnd} 
        distance={1}
        // transitionDuration={0}
        />
    );
  }
}