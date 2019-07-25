import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({ adapter: new EnzymeAdapter() })

//it()/test() are same
test('renders without error', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy();
    //console.log(wrapper.debug())// it will show the component code as string
    const appComponent=wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1)// the "appComponent.length" will give the number of element tah with the attribute (data-test='component-app') //We expect to have only one element with this attribute that is why "toBe(1)"
});

test('render increment button',()=>{

});

test('render counter display', ()=>{

});

test('counter starts at 0', ()=>{

});

test('clicking buttons increment counter display', ()=>{

});