import React,{Component} from 'react'
import { hot } from 'react-hot-loader/root';

class App extends Component {

    constructor(){
        super();


    }
    state={
            counter:0
        };

    render(){
        return (
             <div data-test="component-app">
                 {/*}<p data-test="component-app">Hello world</p>*/}
                 <h1 data-test="counter-display">The counter is currently:{}</h1>
                 <button data-test='increment-btn'>Increment</button>
             </div>
        )
    }
};
export default hot(App);