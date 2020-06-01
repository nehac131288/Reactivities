import React, { SyntheticEvent } from 'react';
import {  Grid } from 'semantic-ui-react';
import { IActivity } from '../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import ActivityForm from './ActivityForm';
import activityStore from './activityStore';
import { observer } from 'mobx-react-lite';

const ActivityDashboard: React.FC = () => {
    const activityStore = useContext(activityStore);
    const { editMode, selectedActivity } = activityStore;
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                    <ActivityDetails />
                )}
                {editMode && (
                    <ActivityForm
                        key={(selectedActivity && selectedActivity.id) || 0}
                        activity={selectedActivity!}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDashboard);