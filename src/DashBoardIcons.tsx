import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TvIcon from '@material-ui/icons/Tv';
import List from '@material-ui/core/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import { ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: "#ffffff",
    fontSize:"30px",
    textAlign: 'center',
    },
    Text:{
         fontSize:"12px",
        textAlign: 'center',
        color:"#ffffff",
        fontFamily:"NunitoSans"
        
    },
    area:{
      display: 'flex',
      flexWrap: 'wrap',
      width:"67px",
      height:"62px",
      "&:hover": {
       backgroundColor: "#7D48B1",
       cursor:"pointer"
 
     }
  },

});

interface IProps{
  ToggleComponent: (email: string) => void
}

export default function DashBoardIcons(props:IProps) {
  const ToggleComponent = props.ToggleComponent;
  console.log(props)
  const classes = useStyles();
  return (
  <List>  
    <ListItem className={classes.area} onClick={()=>ToggleComponent('dashboard')}>
      <DashboardIcon className={classes.root}  />
     <span className={classes.Text}  style={{marginLeft:"-10px"}}>dashboard</span>
    </ListItem>

    <ListItem className={classes.area} onClick={()=>ToggleComponent('Table')} >
      <TvIcon className={classes.root}  />
      <span className={classes.Text} >Table</span>
    </ListItem>

    <ListItem className={classes.area} onClick={()=>ToggleComponent('know')} >
      <LiveTvIcon  className={classes.root} />
      <span className={classes.Text} >know</span>
    </ListItem> 

    <ListItem className={classes.area} onClick={()=>ToggleComponent('folder')} >
      <AssignmentIcon  className={classes.root} />
      <span className={classes.Text} >folder</span>
    </ListItem>

    <ListItem className={classes.area} onClick={()=>ToggleComponent('about')} >
      <FolderSpecialIcon className={classes.root}/>
      <span className={classes.Text} >about</span>
    </ListItem>

    <ListItem className={classes.area} onClick={()=>ToggleComponent('Touch')} >
      <TouchAppIcon className={classes.root} />
      <span className={classes.Text} >Touch</span>
    </ListItem>

    <ListItem className={classes.area} onClick={()=>ToggleComponent('profile')} >
      <PermIdentityIcon className={classes.root}/>
      <span className={classes.Text} >profile</span>
    </ListItem>

    <ListItem className={classes.area} onClick={()=>ToggleComponent('weather')} >
      <FilterDramaIcon className={classes.root} />
      <span className={classes.Text} >weather</span>
    </ListItem>


  </List>
);
};