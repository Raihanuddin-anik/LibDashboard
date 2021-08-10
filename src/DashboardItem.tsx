import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    width: "296px",
    height: "131px",
    borderRadius: "20px",

    color: theme.palette.text.secondary,
}));
const Icon1 = styled(Paper)(({ theme }) => ({
    marginLeft: "15px",
    marginTop: "20px",
    width: "36Px",
    height: "71px",
    background: "#F2F1FE",
    borderRadius: "18px",



}));
const Icon2 = styled(Paper)(({ theme }) => ({
    marginLeft: "15px",
    marginTop: "20px",
    width: "36Px",
    height: "71px",
    background: "#C5DBFF",
    borderRadius: "18px",



}));
const Icon3 = styled(Paper)(({ theme }) => ({
    marginLeft: "15px",
    marginTop: "20px",
    width: "36Px",
    height: "71px",
    background: "#BCDDB3",
    borderRadius: "18px",



}));
const Icon4 = styled(Paper)(({ theme }) => ({
    marginLeft: "15px",
    marginTop: "20px",
    width: "36Px",
    height: "71px",
    background: "#FFF6E0",
    borderRadius: "18px",



}));

const useStyles = makeStyles({
    root: {
         display:"flex",
         marginBottom:"-20px",
    },
    div:{
        marginLeft:"10px",
        marginTop:"10px",
        fontFamily: 'NunitoSans',
    }
  });



export default function DashboardItem() {
    const classes = useStyles();
    return (
        <Box sx={{ width: "95%", margin: "auto", marginTop: "50px" }}>

            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Item sx={{
                        display: 'flex',
                        flexDirection: 'row',
                      
                    }} >
                        <Icon1>
                            <LiveTvIcon sx={{ marginTop: "20px" }} fontSize="medium" />
                        </Icon1>

                        <div  className={classes.div}>
                            <p className={classes.root}>New Leds</p>

                            <h2 style={{color:"#663399"}}>205</h2>
                           

                        </div>
                    </Item>

                </Grid>
                <Grid item xs={3}>
                    <Item sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }} >
                        <Icon2>
                            <LiveTvIcon sx={{ marginTop: "20px" }} fontSize="medium" />
                        </Icon2>

                        <div className={classes.div}>
                            <p className={classes.root}>Sales</p>

                            <h2 style={{color:"#3981F7"}}>$4021</h2>
                        </div>

                    </Item>

                </Grid>
                <Grid item xs={3}>
                    <Item sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }} >
                        <Icon3>
                            <LiveTvIcon sx={{ marginTop: "20px" }} fontSize="medium" />
                        </Icon3>

                        <div className={classes.div}>
                            <p className={classes.root}>Orders</p>

                            <h2 style={{color:"#5DAE49"}}>80</h2>
                           

                        </div>

                    </Item>

                </Grid>
                <Grid item xs={3}>
                    <Item sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }} >
                        <Icon4>
                            <LiveTvIcon sx={{ marginTop: "20px" }} fontSize="medium" />
                        </Icon4>

                        <div className={classes.div}>
                            <p className={classes.root}>Expense</p>

                            <h2 style={{color:"#FFC620"}}>$1200</h2>
                         

                        </div>

                    </Item>

                </Grid>
            </Grid>



        </Box>
    );
}