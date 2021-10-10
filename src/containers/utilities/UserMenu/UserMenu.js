import React, { useState, useEffect } from 'react'

import history from 'Root/history'
import store from 'Store'
import { startLoading, stopLoading  } from 'Store/utilities/actions'


import UserMenuControllComponent from 'Components/utilities/UserMenu/UserMenuControll'
import UserMenuComponent from 'Components/utilities/UserMenu/UserMenu'

export default function UserMenu () {
    const [ isShow, setIsShow ] = useState(false)

    useEffect(() => {
        const userMenuIcon = document.querySelector("#user-menu");
        const userMenuComponent = document.querySelector("#user-menu-controll");
        function handleMouseDown(event) {
            if (isShow && !userMenuComponent.contains(event.target) && !userMenuIcon.contains(event.target)) {
                setIsShow(false)
            }
        }

        window.addEventListener("mousedown", handleMouseDown)
        return () => window.removeEventListener("mousedown", handleMouseDown)
    })

    const handleLogout = () => {
        store.dispatch(startLoading('Logging out . . .'))
        setIsShow(false)
        localStorage.clear()
        history.push('/')
        store.dispatch(stopLoading())
    }

    return (
        <div>
            <UserMenuControllComponent isShow={isShow} handleShow={() => setIsShow(!isShow)} />

            { isShow && <UserMenuComponent handleLogout={handleLogout} /> }
        </div>
    )
}