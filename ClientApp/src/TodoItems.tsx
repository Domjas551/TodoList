﻿import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props:any) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key:number) {
        this.props.delete(key);
    }

    createTasks(item: any) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            
            <ul className="theList">
                {listItems}
                </ul>
                
        );
    }
};

export default TodoItems;