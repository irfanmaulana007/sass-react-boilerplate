import React from 'react'
import { shallow } from 'enzyme'

import InputGroup from './InputGroup'

const props = {
    label: 'Input Email',
    name: 'email',
}
const wrapped = shallow(<InputGroup label={props.label} name={props.name} />)

describe('InputGroup', () => {
    it('should render the InputGroup Component correctly', () => {
        expect(wrapped).toMatchSnapshot()
    })
    it('renders the InputGroup Label', () => {
        expect(wrapped.find('label').text()).toEqual(props.label)
    })
})
