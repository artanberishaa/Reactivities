import React from 'react';
import { Menu, Container, Button, MenuItem, MenuMenu, } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

interface Props {
    openForm: () => void;
}
export default function NavBar({openForm}: Props) {
    return (
        <MenuMenu inverted fixed='top'>
            <Container>
                <MenuItem header/>
                     <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                     Reactivities 
                     <MenuItem name='Activitites' />
                     <MenuItem>
                         <Button onClick={openForm} positive content='Create Activity'/>
                </MenuItem>
            </Container>
        </MenuMenu> 
    )
}
