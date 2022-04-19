import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../../Models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../../Features/activitites/dashboard/ActivityDashboard';
import 'semantic-ui-css/semantic.min.css';
import {v4 as uuid} from 'uuid';

function App() {
   const [activities, setActivities] = useState<Activity[]>([]);
   const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
   const [editMode, setEditMode] = useState(false);
   
   useEffect(() => {
      axios.get('http://localhost:5000/api/activities').then(response => {  
        setActivities(response.data);
    })
    }, [])

    function handleSelectedActivity(id: string) {
      setSelectedActivity(activities.find(x => x.id === id))
    }
   
    function handleCancelSelectActivity () {
      setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string) {
      id ? handleSelectedActivity(id) : handleCancelSelectActivity();
      setEditMode(true);
    }

    function handleFormClose() {
      setEditMode(false);
    }

    function HandleCreateorEditActivity(activity: Activity) {
      activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities,{...activity, id: uuid()}]);
      setEditMode(false);
      setSelectedActivity(activity);
    }

    function handleDeleteActivity(){
      setActivities([...activities.filter(x => x.id !== id)])
    }
  return ( 
    <> 
     <NavBar openForm={handleFormOpen} />
     <Container style={{marginTop: '7em'}}>
       <ActivityDashboard 
       activities={activities}
       selectedActivity={selectedActivity}
       selectActivity={handleSelectedActivity}
       cancelSelectActivity={handleCancelSelectActivity}
       editMode={editMode}
       openForm={handleFormOpen}
       closeForm={handleFormClose}
       createOrEdit={HandleCreateorEditActivity}
       deleteActivity={handleDeleteActivity}
       />
       </Container>    
       
  </>
  );
}




export default App ; 
