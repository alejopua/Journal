import PropTypes from 'prop-types'
import { TurnedInNot } from '@mui/icons-material'
import { ListItemText, Grid, ListItemIcon, Divider, Toolbar, List, ListItem, ListItemButton, Typography, Box, Drawer } from '@mui/material'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }

        }}  
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>Alejandro Ramirez</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Laboris reprehenderit mollit quis.' }/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        
      </Drawer>
    </Box>

  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number
}
