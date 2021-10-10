import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

export default function Button ({ variant, width, children, className, size, onClick, disabled }) {
    let variantAttribute;
    switch (variant) {
        case 'primary': variantAttribute = `${disabled ? 'bg-red-700 text-gray-400 disabled cursor-default' : 'bg-primary hover:bg-primary text-white'}`; break;
        case 'blue': variantAttribute = `${disabled ? 'bg-blue-700 text-gray-400 disabled cursor-default' : 'bg-blue hover:bg-blue text-white'}`; break;
        case 'green-outline': variantAttribute = `${disabled ? 'bg-green-700 text-gray-400 disabled cursor-default' : 'border border-green hover:bg-green text-green'}`; break;
        case 'field': variantAttribute = `bg-field text-gray-400 ${disabled && 'disabled cursor-default'}`; break;

        // case 'primary': variantAttribute = 'bg-blue-500 hover:bg-blue-700 text-white'; break;
        case 'success': variantAttribute = `bg-green-700 text-gray-400 ${disabled && 'disabled cursor-default bg-green-500 hover:bg-green-700 text-white'}`; break;
        case 'danger': variantAttribute = `${disabled ? 'bg-red-700 text-gray-400 disabled cursor-default' : 'bg-red-600 hover:bg-red-800 text-white'}`; break;
        case 'link': variantAttribute = 'text-blue-500 hover:text-blue-700'; break;
        case 'link-red': variantAttribute = 'text-red-500 hover:text-red-700'; break;
        case 'default': variantAttribute = 'bg-gray-500 hover:bg-gray-700 text-white'; break;
    }

    let widthAttribute;
    switch (width) {
        case 'large': widthAttribute = 'py-2 px-12'; break;
        case 'medium': widthAttribute = 'py-2 px-8'; break;
        case 'small': widthAttribute = 'py-2 px-4'; break;
        case 'xsmall': widthAttribute = 'p-1'; break;
    }

    return (
        <button onClick={onClick} disabled={disabled} className={`capitalize ${widthAttribute} ${variantAttribute} ${className} text-title`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.any,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    variant: 'primary',
    width: 'large',
    disabled: false,
    size: 'title',
}