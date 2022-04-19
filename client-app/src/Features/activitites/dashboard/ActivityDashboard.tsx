import * as React from "react";
import { Grid } from "semantic-ui-react";
import typescript, { createIncrementalCompilerHost, GeneratedIdentifierFlags } from "typescript";
import { Activity } from '../../../App/Models/Activity';
import ActivityDetails from "../detail/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import 'semantic-ui-css/semantic.min.css';
import { ComponentType} from "react";
import { } from "module"; typescript;


function App(props:{component:ComponentType}) {
  const Comp: ComponentType = props.component
  return (<Comp />) 
}

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

 export default function ActivityDashboard({activities, selectedActivity, selectActivity, 
    cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props) {
     return (
    
        
        <>
  
          <Grid> 
           <Grid.Column width='10'>
              <ActivityList activities={activities} 
              selectActivity={selectActivity} 
              deleteActivity={deleteActivity}
            />          
           </Grid.Column>
           <Grid.Column width='6' >
               {selectedActivity && !editMode &&
               <ActivityDetails activity={selectedActivity} 
               cancelSelectActivity={cancelSelectActivity} 
               openForm={openForm} /> }
               {editMode &&
               <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} /> }
           </Grid.Column>
           </Grid>
        </>
       ) }
               