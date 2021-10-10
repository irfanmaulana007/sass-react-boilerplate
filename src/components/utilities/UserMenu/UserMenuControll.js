import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { getUser } from 'Helpers/jwtService'

import { TextBody } from 'Components/utilities/Text/Text'

import './UserMenu.scss'

export default function UserMenuControll ({ isShow, handleShow }) {
    return (
        <div id="user-menu-controll" className="cursor-pointer float-right" onClick={handleShow}>
            <TextBody className="inline-block mr-5">Hello, {getUser().commonname}</TextBody>

            <FontAwesomeIcon className="mr-2" icon={faUserCircle} size="2x" />

            {isShow
                ? <FontAwesomeIcon className="mb-1" icon={faCaretUp} />
                : <FontAwesomeIcon className="mb-1" icon={faCaretDown} />
            }
        </div>
    )
}

UserMenuControll.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleShow: PropTypes.func.isRequired
}

UserMenuControll.defaultProps = {
    isShow: false
}