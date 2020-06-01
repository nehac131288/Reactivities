
import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../app/models/activity';
import NavBar from './NavBar';
import ActivityDashboard from './ActivityDashboard';
import agent from './agent';
import LoadingComponent from './LoadingComponent';
import ActivityStore from './activityStore';

const App = () => {
    const activityStore = useContext(ActivityStore)

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities' />

    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <ActivityDashboard />
            </Container>
        </Fragment>
    );
};

export default observer(App);

