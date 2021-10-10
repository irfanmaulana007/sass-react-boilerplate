import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { TextTitle } from 'Components/utilities/Text/Text'
import Button from 'Components/utilities/Button/Button'

export default function UserMenu ({ handleLogout }) {
    return (
        <div>
            <div id="user-menu">
                <FontAwesomeIcon className="caret" icon={faCaretUp} size="lg" />
                <Button variant="link" width="xsmall" onClick={handleLogout}><TextTitle className="text-red-500 hover:text-red-800 cursor-pointer inline">Log Out</TextTitle></Button>
            </div>
        </div>
    )
}

UserMenu.propTypes = {
    handleLogout: PropTypes.func.isRequired
}