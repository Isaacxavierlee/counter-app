import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value)
{

}
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }
    

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    render() {

        console.log("Counter - Rendered");

        const { id, onDelete, onIncrement, counter } = this.props;

        return (
            <div>
                <h4>{id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => onIncrement(counter)} 
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>
                <button 
                    onClick={() => onDelete(counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Counter;
