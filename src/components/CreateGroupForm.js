import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
            onSubmit={handleSubmit}>

            <TextField id="email"
                label="Email"
                variant="outlined"
                type="email"
                value={state.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="mb-16" />

            <TextField id="password"
                label="Password"
                variant="outlined"
                type="password"
                value={state.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="mb-16" />

            <FormControl variant="outlined" className="mb-16">
                <InputLabel id="role">Role</InputLabel>

                <Select
                    labelId="role"
                    id="role"
                    value={state.role}
                    onChange={(e) => handleChange('role', e.target.value)}>

                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="ADMIN">Admin</MenuItem>
                    <MenuItem value="VISITOR">Monitor</MenuItem>
                    <MenuItem value="SALES">Sales</MenuItem>
                </Select>
            </FormControl>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.remenberMe}
                        onChange={(e) => handleChange('remenberMe', e.target.checked)}
                        value={true}
                        color="primary"
                    />
                }
                label="Remeber me"
                className="mb-16" />

            <Button variant="contained"
                color="primary"
                type="submit">
                Register
            </Button>

        </form>
    );
}
