import React, { Component } from 'react';
import NavBar from './components/navbar'; // Adjusted filename and import path
import Counters from './components/counters'; // Adjusted filename and import path
import './App.css';

class App extends Component {
    state = { 
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    constructor() {
      super();
      console.log('App - Constructor');
      }

      componentDidMount() {
        console.log('App - Mounted');
      }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };

    render() {
      console.log('App - Rendered')

        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className='container'>
                    <Counters 
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}       
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
