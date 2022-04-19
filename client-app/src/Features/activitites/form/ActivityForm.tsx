import { Clear } from "@mui/icons-material";
import { ChangeEvent } from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from '../../../App/Models/Activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activit: Activity) => void;
}
export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {

   const initialState = selectedActivity ?? {
       id: '',
       title: '',
       category:'',
       description:'',
       date:'',
       city:'',
       venue:'',
   }
    const [activity, setActivity] = useState(initialState);

    function handleSubmit () {
        createOrEdit(activity);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value}) 
    }

    return (
        <>
           <Form onSubmit={handleSubmit} autoComplete='off' >
               <FormInput placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
               <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
               <FormInput placeholder='Cetegory' value={activity.category} name='category' onChange={handleInputChange} />
               <FormInput placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
               <FormInput placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
               <FormInput placeholder='Venue' value={activity.value} name='value' onChange={handleInputChange}/>
               <Button floated='right' positive type='submit' content='Submit' />
               <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
           </Form>
        </>
    )
}

function useState(initialState: Activity): [any, any] {
    throw new Error("Function not implemented.");
}
