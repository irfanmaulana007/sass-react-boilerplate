import React from 'react';
import PropTypes from "prop-types"
// import Loader from 'react-loader-spinner';

import './Loaders.scss'

export default function Loaders ({ display, message }) {
    return (
        <div id="loaders" className={`${display ? 'visible' : 'invisible'}`}>
            <div className="loaders">
                <center>
                    <Loader type="Puff" color="#00adb5" height="100" width="100" />
                </center>
                <br/>
                <h6 className="text-white text-center">{message}</h6>
            </div>
        </div>
    )
}

Loaders.propTypes = {
    display: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
}

Loaders.defaultProps = {
    display: false,
    message: 'Loading . . .'
}