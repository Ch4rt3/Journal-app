
import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { SideBarItem } from './SideBarItem'

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar variant='h6' noWrap component='div'>
                <Typography>{ displayName }</Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    notes.map( note => (
                        <SideBarItem key={ note.id } { ...note } />
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
