import React,{Component} from 'react'
import { hot } from 'react-hot-loader/root';

class App extends Component {


    state={
            counter:0
    };

    render(){
        return (
             <div data-test="component-app">
                 {/*}<p data-test="component-app">Hello world</p>*/}
                 <h1 data-test="counter-display">The counter is currently:{this.state.counter}</h1>
                 <button data-test='increment-btn' onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button>
             </div>
        )
    }
};
export default hot(App);