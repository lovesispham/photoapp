import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import NotFound from '../pages/NotFound'
import AddEdit from '../pages/AddEdit'
const Routes = () => {
    
    return (
        <Switch>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={Gallery} />
            
            <Route path="/photo/add" component={AddEdit} />
            <Route path="/photo/:photoId" component={AddEdit} />
            <Route path="*" component={NotFound} />
            
        </Switch>
    )
}

export default Routes
