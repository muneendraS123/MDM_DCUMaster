import React from "react";
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import { Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import {CssBaseline } from '@mui/material';
import useStyles from "./UseStyle";
import InstalledDate from "./InstalledDate";
import CommisonedDate from "./CommisonedDate";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const DcuConfiguration = () => {

    const classes = useStyles();
    return (
        <card >
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <CssBaseline />
    

            <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
            </Box>

            <div>
                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <TextField
                        id="outlined-select-currency-native"
                        required label="DCU Serial No :"
                        defaultValue=""
                    >

                    </TextField>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        required label="Select DCU Make :"
                        SelectProps={{
                            native: true,
                        }}
                    >
                       
                    </TextField>
                </Grid>
            </div>
            <Grid container direction="row" justifyContent="center" alignContent="center" >
                <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="Select Type :"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>


                <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="Select Status :"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" >
            <TextField
                    id="outlined-select-currency-native"
                    required label="Latitude(Degrees) :"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    required label="Longitude(Degrees) :"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" >
     
            <InstalledDate />


              <CommisonedDate />
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" >
                <div>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="IP Address :"
                    >
                    </TextField>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="Firmware Version : "
                    ></TextField>
                </div>
            </Grid>

            

            <Grid container direction="row" justifyContent="center" alignContent="center" >
                <div>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="HES Id :"
                    >
                    </TextField>
                    
                </div>
                </Grid>
                
          
            </Box>
    
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="outlined" color="error" >Clear</Button>
                <Button variant="contained" >Submit</Button>
   
                    
                </Stack>
            <br />
        </card>
    )
}
export default DcuConfiguration;