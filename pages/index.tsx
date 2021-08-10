import * as React from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiDrawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TopBar from '../src/TopBar';
import  DashBoardIcons  from '../src/DashBoardIcons';
import DashboardItem from '../src/DashboardItem';
import { ListItemText } from '@material-ui/core';
import { useState } from 'react';





const dashboardWidth: number = 120;



// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),

// }));

const Dashboard = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  () => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: dashboardWidth,
      flexGrow: 2,
      backgroundColor: "#663399"

    },
  }),
);

function DashboardContent() {
  const [component, setComponent] = useState('dashboard');
  console.log(component)
const ToggleComponent = (parameter:string) =>{
  setComponent(parameter)
}
  return (
    <Box sx={{ display: 'flex'}}>
      <Dashboard variant="permanent" >
        <Toolbar sx={{ alignItems: 'center' }}>
          <Typography color="#ffffff" variant="h5">GULL</Typography>
        </Toolbar>
        <Toolbar sx={{ alignItems: 'center' }}  >
          <List >
               <DashBoardIcons ToggleComponent ={ToggleComponent}/>
          </List>
        </Toolbar>
      </Dashboard >
      <Box
        component="main"
        sx={{
          backgroundColor: "#F1F3F4",
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }} >
        <TopBar />
         {component==="dashboard" && <DashboardItem />}
         {component==="Table" &&  <p style={{marginLeft:"20px"}}>This is table content page</p>}
         {component==="know" && <p style={{marginLeft:"20px"}}>This is the page to know company </p>}
         {component==="folder" &&  <p style={{marginLeft:"20px"}}>this is folder page</p>}
         {component==="about" && <p style={{marginLeft:"20px"}}>this is about page</p>}
         {component==="Touch" && <p style={{marginLeft:"20px"}}>this is touch page</p>}
         {component==="profile" && <p style={{marginLeft:"20px"}}>this is Profile page</p>}
         {component==="weather" && <p style={{marginLeft:"20px"}}>this is weather page</p>}
      </Box>
    </Box>
  );
}

export default DashboardContent;

