import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
// import { NotificationContainer } from 'react-notifications';

import history from './history'
import store from './store'

// import Loaders from 'Containers/utilities/Loaders/Loaders'

// Views
// Auth
import NotFoundPage from './views/utilities/NotFoundPage.jsx'

import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState().utils
    
        store.subscribe (() => {
            this.setState(store.getState().utils)
        })
    }

    render() {
        const { visibility, message } = this.state

        return (
            <Router history={history}>
                {/* <Loaders display={visibility} message={message} /> */}
                {/* <NotificationContainer /> */}

                <Switch>
                    <div className='container mx-auto py-20'>
                        
                        <Route component={NotFoundPage} />
                    </div>
                </Switch>

            </Router>
        )
    }
}

export default App
