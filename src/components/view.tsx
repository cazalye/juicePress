import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landing';


const View = () => (
    <Switch>
        <Route exact={true} path="/" component={Landing}/>
    </Switch>
);

export default View;