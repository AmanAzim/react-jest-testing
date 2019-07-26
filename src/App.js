import React,{Component} from 'react'
import { hot } from 'react-hot-loader/root';

class App extends Component {


    state={
        counter:0,
        disableBtn:false
    };

    onIncrement=()=>{
        this.setState({counter:this.state.counter+1}, ()=>{
            if(this.state.counter>=0){
                this.setState({disableBtn:false})
            }
        });
    };

    onDecrement=()=> {
        this.setState((prevState,prevProps)=>{
            return {
                counter:prevState.counter-1
            }
        }, ()=>{
            if(this.state.counter<0){
                this.setState({disableBtn:true})
            }
        });
    };

    render(){
        return (
             <div data-test="component-app">
                 {/*}<p data-test="component-app">Hello world</p>*/}
                 <h1 data-test="counter-display">The counter is currently:{this.state.counter}</h1>
                 <p style={{color:'red'}} data-test="error-msg">{this.state.disableBtn? 'The counter cannot go below 0':null}</p>
                 <button data-test='increment-btn' onClick={()=>this.onIncrement()}>Increment</button>
                 <button data-test='decrement-btn' disabled={this.state.disableBtn} onClick={()=>this.onDecrement()}>Decrement</button>
             </div>
        )
    }
}

export default hot(App);