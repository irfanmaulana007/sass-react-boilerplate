import React from 'react'

import { TextSmall } from 'Components/utilities/Text/Text'

import './InputGroup.scss'

export default function InputGroup (props) {
    let inputType;

    switch (props.type) {
        case 'text':
            inputType = <input className={`px-2 py-1 font-light bg-field w-${props.width ? props.width + ' inline' : 'full block'} ${props.classadditional}`} {...props} onChange={props.onChange} />
            break
        case 'password':
            inputType = <input className={`px-2 py-1 font-light bg-field w-${props.width ? props.width + ' inline' : 'full block'} ${props.classadditional}`} {...props} onChange={props.onChange} />
            break
        case 'select':
            inputType = (
                <select className={`capitalize px-2 py-2 font-light bg-field ${props.width ? 'w-' + props.width + ' inline' : 'full block'} ${props.disabled ? 'bg-gray-200' : ''} ${props.classadditional}`} {...props} defaultValue="" onChange={props.onChange}>
                    { props.excludeselectoption ? '' :  <option value="">Select</option> }
                    {props.options.map((values, key) =>
                        <option key={key} value={values.id}>{values.name}</option>
                    )}
                </select>
            )
            break
        default:
            inputType = <input className={`px-2 py-1 font-light bg-field w-${props.width ? props.width + ' inline' : 'full block'} ${props.classadditional}`} {...props} onChange={props.onChange} />
            break
    }

    return (
        <div className={`${props.width ? 'inline' : 'block'}`}>
            { props.label &&
                <TextSmall muted className="uppercase mb-2">
                    {props.label ? props.label : props.name} { props.required && <span className="text-red-500">*</span>}
                </TextSmall>
            }
            {inputType}
        </div>
    )
}