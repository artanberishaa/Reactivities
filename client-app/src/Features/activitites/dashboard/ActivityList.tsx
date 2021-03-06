import React from 'react';
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemMeta, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../App/Models/Activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
}
export default function ActivityList({activities,  selectActivity}: Props) {
    return (
       <>
         <ItemGroup devided>
           {activities.map(activity => (
              <Item key={activity.id}>
                     <ItemContent>
                         <ItemHeader as='a'>{activity.title}</ItemHeader>
                         <ItemMeta>{activity.date}</ItemMeta>
                         <ItemDescription>
                             <div>{activity.description}</div>
                             <div>{activity.city}, {activity.venue}</div>
                         </ItemDescription>
                         <ItemExtra>
                             <Button onClick={() =>  selectActivity(activity.id)}floated='right' contet='View' color='blue' />
                             <Label basic content={activity.category} />
                         </ItemExtra>
                     </ItemContent>
              </Item>
           ))}
         </ItemGroup>
        </>
        )}
