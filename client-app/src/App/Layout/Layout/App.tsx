import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List, ListItem} from 'semantic-ui-react';
import { Activity } from '../../Models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../../Features/activitites/dashboard/ActivityDashboard';
 
function App() {
   const [activities, setActivities] = useState<Activity[]>([]);
   const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
   const [editMode, setEditMode] = useState(false);
   
   useEffect(() => {
      axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {  //remove <Activity[]> maybe
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
       />
       </Container>    
       
  </>
  );
}




export default App ; 
