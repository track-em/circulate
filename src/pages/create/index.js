import Navbar from "../../components/Navbar"
import ActionCard from "../../components/Cards";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Create() {

    return (
        <>
            <Navbar />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div sx={{}} >
                        <Typography variant="h4" gutterBottom sx={{ color: '#012A4A', textAlign: "center", my: '10%', mx: '10%' }} suppressHydrationWarning>
                        Please choose an option which works best for your financial growth journey
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" alignItems="center" sx={{pb:2}}>
                    <ActionCard cardDetail={'Create a group'} icon="createGroupIcon.png" redirectURI="dashboard"/>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" alignItems="center" sx={{pb:2}}>
                
                    <ActionCard cardDetail={'Join a group'} icon="joinGroupIcon.png" redirectURI="/"/>
                    
                </Grid>
            </Grid>
        </>
    );
}
