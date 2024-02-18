import { Inter } from "next/font/google";
import secureLocalStorage from "react-secure-storage";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { styled } from '@mui/joy/styles';
import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Image from '@mui/icons-material/Image';
import Button from '@mui/joy/Button';
import Link from '@mui/material/Link';
// import { Typography } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import mockdata from "../api/mockdata.json"

import CardContent from '@mui/joy/CardContent';

const inter = Inter({ subsets: ["latin"] });

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: 'grey',
    padding: theme.spacing(1),
    textAlign: 'center',
    // borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

export default function Home() {
    const [activeGroup, setActiveGroup] = useState({});

    const handleClick = (item) => {
        console.log("item,", item);
        setActiveGroup(item);

        // Change the value of skeleton 
    };


    // secureLocalStorage.setItem supports 'String - Object - Number - Boolean' as value
    useEffect(() => {
        secureLocalStorage.setItem("key-name", {
            message: "This is testing of local storage",
        });
        secureLocalStorage.setItem("number", 12);
        secureLocalStorage.setItem("string", "12");
        secureLocalStorage.setItem("boolean", true);
        let value = secureLocalStorage.getItem("boolean");
        console.log("value:", value);
    }, []);
    console.log("mockdata:", mockdata)
    console.log("activeGroup:", activeGroup.name)
    let userGroups = mockdata.data.map(item => {
        return (
            <ListItemButton onClick={() => handleClick(item)}>
                <ListItemDecorator>
                    <Image />
                </ListItemDecorator>
                {item.name}
            </ListItemButton>
        )
    })


    return (
        <>
            <Navbar />
            <Grid container spacing={2} sx={{ flexGrow: 1, height: '100vh' }}>
                <Grid xs={3} sx={{ height: '100%', bgcolor: '#d3d3d3' }}>
                    <Typography level="h3" gutterBottom sx={{ color: '#012A4A', my: '5%', mx: '10%' }}>
                        Groups
                    </Typography>
                    <List
                        component="nav"
                        sx={{
                            maxWidth: 320,
                            ml: '5%'
                        }}
                    >
                        {userGroups}
                    </List>
                    <Button variant="solid" sx={{ bgcolor: "#012A4A", m: '20%' }}><Link href="create" sx={{ color: "white", textDecoration: "none" }}>Add Group</Link></Button>
                </Grid>
                <Grid xs={9} sx={{ height: '100%', bgcolor: 'white', p: 5 }}>

                    <Card sx={{ width: 400, display: 'flex', gap: 2, bgcolor: '#A9D6E5' }}>
                        <CardContent>

                            <Typography level="h3" textColor="inherit" sx={{ p: 2 }}>
                                Group Name: {activeGroup.name}
                            </Typography>
                            <Typography textColor="inherit" sx={{ pl: 2 }} ><b>Max participants: </b>{activeGroup.max_participants}</Typography>
                            <Typography textColor="inherit" sx={{ pl: 2, pb: 2 }}><b>Min Contribution: </b>{activeGroup.min_contribution}</Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </>

    );
};
