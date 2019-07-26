import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';



Enzyme.configure({ adapter: new EnzymeAdapter() });

//The "setup()" is a Factory function to create a Shallow Wrapper component. Have parameter name props={} and state={} which is an object.
const setup=(props={}, state=null)=>{
  const wrapper=shallow(<App {...props}/>);
  if(state) wrapper.setState(state);// we we set state it will be applied to the wrapper component
  return wrapper
};
//this function returns ShallowWrapper's element tag containing certain test Attribute
const findByTestAttribute=(wrapper, testAttributeValue)=>{
    return wrapper.find(`[data-test='${testAttributeValue}']`);
};



//it()/test() are same
test('renders without error', () => {
    //const wrapper = shallow(<App />);
    const wrapper =setup();
    expect(wrapper).toBeTruthy();

    //console.log(wrapper.debug())// it will show the component code as string

    //const appComponent=wrapper.find("[data-test='component-app']");
    const appComponent=findByTestAttribute( wrapper,'component-app');
    expect(appComponent.length).toBe(1)// the "appComponent.length" will give the number of element tah with the attribute (data-test='component-app') //We expect to have only one element with this attribute that is why "toBe(1)"
});

test('render increment button',()=>{
    const wrapper =  setup();
    const button=findByTestAttribute( wrapper,'increment-btn');
    expect(button.length).toBe(1)
});

test('render decrement button',()=>{
    const wrapper =  setup();
    const button=findByTestAttribute( wrapper,'decrement-btn');
    expect(button.length).toBe(1)
});

test('render counter display', ()=>{
    const wrapper = shallow(<App />);
    const counterDisplay=wrapper.find("[data-test='counter-display']")
    expect(counterDisplay.length).toBe(1)
});

test('counter starts at 0', ()=>{
    const wrapper=setup();
    const initialCounterState=wrapper.state('counter');
    expect(initialCounterState).toBe(0)
});

test('clicking increment buttons increment counter display', ()=>{
    const counter=7;
    const wrapper=setup(null, {counter});// getting the shalow wrapped component with new state value
    const button=wrapper.find("[data-test='increment-btn']");// finding the button to me tested

    button.simulate('click');//simulate clicking on the button

    wrapper.update();//force rerender the component so we can get the counter result after clicking

    const counterState=wrapper.state('counter');//get the state "counter"
    expect(counterState).toBe(counter+1);// checks its value

    //button.simulate('click');
    //wrapper.update();
    const counterDisplay=wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.text()).toContain(counter+1); //To check the element for current state value
});

test('clicking decrement button decrement the counter display', ()=>{
    const wrapper=shallow(<App/>);
    wrapper.setState({counter:7});//set the current counter to 7

    const decrementBtn=wrapper.find("[data-test='decrement-btn']");
    decrementBtn.simulate('click');//click the button

    wrapper.update();

    const counterDisplay=wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.text()).toContain(6)
});

test('error message and decrement button disabled when counter below zero', ()=>{
    const wrapper=shallow(<App/>);
    wrapper.setState({disableBtn:true});//set the current counter to -1

    //wrapper.update();
    const decrementBtn=wrapper.find("[data-test='decrement-btn']");
    expect(decrementBtn.props()["disabled"]).toBe(true); //Checking the property "disabled" is true or not

    const errorMsg=wrapper.find("[data-test='error-msg']");
    expect(errorMsg.text()).toContain('The counter cannot go below 0');
});

test('check the method onDecrement()', ()=>{

});