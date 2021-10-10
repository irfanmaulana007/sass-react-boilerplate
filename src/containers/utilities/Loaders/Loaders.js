import React from 'react';
import PropTypes from "prop-types"

import LoadersComponent from 'Components/utilities/Loaders/Loaders'

export default function Loaders ({ display, message }) {
    return <LoadersComponent display={display} message={message} />
}

Loaders.propTypes = {
    display: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
}