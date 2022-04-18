import React from 'react';
import { Menu, Container, Button, MenuItem, } from 'semantic-ui-react'

interface Props {
    openForm: () => void;
}
export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem header/>
                     <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                     Reactivities 
                     <MenuItem name='Activitites' />
                     <MenuItem>
                         <Button onClick={openForm} positive content='Create Activity'/>
                </MenuItem>
            </Container>
        </Menu> 
    )
}
