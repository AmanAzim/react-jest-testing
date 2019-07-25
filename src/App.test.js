import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';



Enzyme.configure({ adapter: new EnzymeAdapter() })

//The "setup()" is a Factory function to create a Shallow Wrapper component. Have parameter name props={} and state={} which is an object.
const setup=(props={}, state=null)=>{
  return shallow(<App {...props}/>)
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

test('clicking buttons increment counter display', ()=>{

});