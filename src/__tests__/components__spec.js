import React from 'react';
import { TodoApp } from '../components';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
describe('todoApp', () => {
    it('should render correctly', () => {
        const output = shallow(<TodoApp/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
