import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid, Typography } from '@mui/material';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

export default function CreateGroupForm() {
    const [state, setState] = useState({ email: '', password: '', role: '', remenberMe: false });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    const handleChange = (name, value) => {
        setState({ ...state, [name]: value });
    };

    return (
        <form noValidate
            autoComplete="off"
            onSubmit={handleSubmit} sx={{ m: "10%" }}>

            <Grid container spacing={2} sx={{ m: '5%' }}>
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#012A4A', textAlign: "right" }}>
                        Max Number of participants: </Typography>

                </Grid>
                <Grid item xs={8}>
                    <TextField type="text" size='small' defaultValue="Small" />

                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#012A4A', textAlign: "right" }}>
                        Maximum contribution amount: </Typography>

                </Grid>
                <Grid item xs={6} sx={{
                    color: '#012A4A', display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <TextField type="text" size='small' defaultValue="Small" />
                    <CurrencyPoundIcon />

                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#012A4A', textAlign: "right" }}>
                        Minimum contribution amount: </Typography>

                </Grid>
                <Grid item xs={8} sx={{
                    color: '#012A4A', display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <TextField type="text" size='small' defaultValue="Small" />
                    <CurrencyPoundIcon />
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#012A4A', textAlign: "right" }}>
                        Group Type </Typography>

                </Grid>
                <Grid item xs={8}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="open" control={<Radio />} label="Open" />
                        <FormControlLabel value="closed" control={<Radio />} label="Closed" />

                    </RadioGroup>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#012A4A', textAlign: "right" }}>
                        Group Email List: </Typography>

                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </Grid>

                <Grid item xs={10} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            
        </form>
    );
}
