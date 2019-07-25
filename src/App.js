import React from 'react'
import { hot } from 'react-hot-loader/root';

const App = () =>{

    return (
         <div data-test="component-app">
             {/*}<p data-test="component-app">Hello world</p>*/}
              <p>Hello world</p>
         </div>

    )
};
export default hot(App);