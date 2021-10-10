import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import _ from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Breadrcumb ({ siteList }) {
    const firstLabel = _.replace(_.first(siteList), new RegExp("/","g")," ")

    return (
        <div className="mb-4 text-detail capitalize">
            <Link to={`/${_.first(siteList)}`} className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon className="mr-1" icon={faChevronLeft} /> {firstLabel}
            </Link>
            <span className="ml-2 mr-1 font-weight-bold">/</span> {_.last(siteList)}
        </div>
    )
}

Breadrcumb.propTypes = {
    siteList: PropTypes.array.isRequired
}