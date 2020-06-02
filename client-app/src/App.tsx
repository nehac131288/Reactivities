
import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from './ActivityDashboard';
import { RouteComponentProps, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ActivityForm from './ActivityForm';
import ActivityDetails from './ActivityDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {

    return (
        <Fragment>
            <Route exact path='/' component={HomePage} />
            <Route
                path={'/(.+)'}
                render={() => (
                    <Fragment>
                        <NavBar />
                        <Container style={{ marginTop: '7em' }}>
                            <Route exact path='/activities' component={ActivityDashboard} />
                            <Route path='/activities/:id' component={ActivityDetails} />
                            <Route
                                key={location.key}
                                path={['/createActivity', '/manage/:id']}
                                component={ActivityForm}
                            />
                        </Container>
                    </Fragment>
                )}
            />
        </Fragment>
    );
};

export default withRouter(App);

