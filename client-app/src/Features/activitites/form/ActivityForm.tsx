import { Clear } from "@mui/icons-material";
import React from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from '../../../App/Models/Activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}
export default function ActivityForm({activity, closeForm}: Props) {
    return (
        <>
           <Form>
               <FormInput placeholder='Title' />
               <FormInput placeholder='Description' />
               <FormInput placeholder='Cetegory' />
               <FormInput placeholder='Date' />
               <FormInput placeholder='City' />
               <FormInput placeholder='Venue' />
               <Button floated='right' positive type='submit' content='Submit' />
               <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
           </Form>
        </>
    )
}