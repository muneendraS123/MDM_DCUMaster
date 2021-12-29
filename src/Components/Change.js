import React from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import DropdownClass from "../DcuMasterpage/DcuMastersub";
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import { Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import { FormControl } from "@mui/material";
import  MaterialUIPickers from './Date.js';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Change = () => {
  const clearField = ()=>{
    alert("elements cleared")
  } 
  const addField = ()=>{
    alert("elements submitted")
  }


    return (
        <Card >
            <Grid container direction="column" allignItems="center" justify="center">
                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <Grid item xs={4}>
                        <FormControl>
                        Existing Device Serial Number :<TextField id="outlined-basic" label="Existing Device Serial No" variant="outlined" />
                        </FormControl>
                    </Grid>

                    <Grid Rowspacing={10} Item={Card} item xs={6} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                          Date Of Failure :<MaterialUIPickers />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={7}>
                        <FormControl>
                        New Device Serial Number :<TextField id="outlined-basic" label="New Device Serial No" variant="outlined" />
                        </FormControl>
                        </Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                          Date Of Installation :<MaterialUIPickers /></Grid></Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={6} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={8}>
                        Reason For Change :<TextField id="outlined-basic" label="Reason For Change " variant="outlined" /></Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                          Status :<DropdownClass /></Grid></Grid>
                </Grid>
                <br></br>
               
                </Grid>
                <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="outlined" color="error" onClick={clearField}>Clear</Button>
                <Button variant="contained" onClick={addField}>Submit</Button>
   
                    
                </Stack>
            </Card>
        
    )
}
export default Change