import React from 'react';

import { TodoApp } from '../components';
import { theStore } from '../reducers';

import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
describe('todoApp', () => {
    it('should render correctly', () => {
        const output = shallow(<TodoApp/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('changes state when got text inputet', done => {
        const wrapper = shallow(<TodoApp todos = {theStore.getState().todos}/>),
            input = wrapper.find('input'),
            form = wrapper.find('form');
        input.simulate('change', { target: { value: 'Hello' } });
        form.simulate('submit');
        expect(form.find('li').text()).toBe('Hello');
    });
});
