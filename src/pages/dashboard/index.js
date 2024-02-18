import { Inter } from "next/font/google";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";
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


const inter = Inter({ subsets: ["latin"] });

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: 'grey',
    padding: theme.spacing(1),
    textAlign: 'center',
    // borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

export default function Home() {

    const handleClick = (item) => {
        console.log(item);
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
        console.log(value);
    }, []);
    console.log(mockdata)

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

    console.log(userGroups)

    return (
        <>
            <Navbar />
            <Grid container spacing={2} sx={{ flexGrow: 1, height: '100vh' }}>
                <Grid xs={3} sx={{ height: '100%', bgcolor: '#d3d3d3' }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#012A4A', textAlign: "center", my: '1%', mx: '10%' }}>
                        Group
                    </Typography>
                    <List
                        component="nav"
                        sx={{
                            maxWidth: 320,
                        }}
                    >

                        {userGroups}
                    </List>
                    <Button variant="solid" sx={{ bgcolor: "#012A4A" }}><Link href="create" sx={{ color: "white", textDecoration: "none" }}>Add Group</Link></Button>
                </Grid>
                <Grid xs={9} sx={{ height: '100%', bgcolor: 'white' }}>

                    <Card variant="outlined" sx={{ width: 343, display: 'flex', gap: 2 }}>
                        <AspectRatio ratio="21/9">
                            <Skeleton variant="overlay">
                                <img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                />
                            </Skeleton>
                        </AspectRatio>
                        <Typography>
                            <Skeleton>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and
                                publishing industries.
                            </Skeleton>
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </>

    );
};
