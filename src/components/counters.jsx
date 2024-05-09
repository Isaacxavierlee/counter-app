import React, { Component } from 'react';
import Counter from './counter'; // Adjusted filename to match actual filename

class Counters extends Component {
    render() { 

        console.log("Counters - Rendered");

        const { counters, onReset, onDelete, onIncrement } = this.props; // Destructuring props for better readability
        return (
            <div>
                <button
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'>
                    Reset
                </button>
                {counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter} 
                    />
                ))}
            </div>
        );
    }
}
 
export default Counters;
