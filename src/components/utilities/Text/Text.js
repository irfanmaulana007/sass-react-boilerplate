import React from 'react'
import PropTypes from 'prop-types'

export const TextHead = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-head ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextHead.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}

export const TextSubhead = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-subhead ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextSubhead.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}

export const TextBody = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-body ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextBody.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}

export const TextTitle = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-title ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextTitle.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}

export const TextDescription = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-description ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextDescription.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}

export const TextSmall = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-small ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextSmall.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}

export const TextXsmall = ({ children, className, center, muted }) => {
    const centerProps = center ? ' text-center' : ''
    const mutedProps = muted ? ' text-gray-500' : ''

    return <p className={`text-xsmall ${className}${centerProps}${mutedProps}`}>{children}</p>
}

TextXsmall.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
}