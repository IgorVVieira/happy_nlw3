import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            {/* Switch: Apenas uma rota em tela */}
            <Switch>
                <Route exact path="/" component={Landing}></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;