import React from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import DropdownClass from "../DcuMasterpage/DcuMastersub";
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import { Stack } from "@mui/material";
import { FormControl } from "@mui/material";
import Paper from '@mui/material/Paper';
import MaterialUIPickers from './Date.js';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const DcuConfiguration = () => {
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
                        DCU Serial No :<TextField id="outlined-basic" label="dcu serial no" variant="outlined" />
                        </FormControl>
                    </Grid>

                    <Grid Rowspacing={10} Item={Card} item xs={6} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Select DCU Make :<DropdownClass />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                        Select Type :<DropdownClass /></Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                        Select Status :<DropdownClass /></Grid></Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={6} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                        Latitude(Degrees) :<TextField id="outlined-basic" label="latitude" variant="outlined" />
                        </Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Longitude(Degrees) :<TextField id="outlined-basic" label="longitude" variant="outlined" />
                            </Grid></Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                        Installed Date :<MaterialUIPickers />
                        </Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Commisoned Date :<MaterialUIPickers />
                            </Grid></Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignContent="center">
                <Grid item xs={4}>
                        <FormControl>
                        IP Address :<TextField id="outlined-basic" label="Enter Ip Address :" variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl>
                            Firmware Version :<TextField id="outlined-basic" label="firmware version :" variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                <Grid item xs={8}>
                        <FormControl>
                        HES Id :<TextField id="outlined-basic" label="hes id" variant="outlined" />
                        </FormControl>
                    </Grid>
                 
                </Grid>
                <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="outlined" color="error" onClick={clearField}>Clear</Button>
                <Button variant="contained" onClick={addField}>Submit</Button>
   
                    
                </Stack>
            </Grid>
        </Card>
    )
}
export default DcuConfiguration;