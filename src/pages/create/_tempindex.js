import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActionCard from '../../components/Cards'
// const inter = Inter({ subsets: ["latin"] });
// import secureLocalStorage from "react-secure-storage";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/navigation'

export default function Create() {
    const router = useRouter()

    // console.log(secureLocalStorage.getItem("key-name"))
    // console.log(secureLocalStorage.getItem("number"))
    return (
        <div sx={{ bgcolor: '#fff' }}>
            <Navbar />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div sx={{}} >
                        <Typography variant="h4" gutterBottom sx={{ color: '#012A4A', textAlign: "center", my: '10%', mx: '10%' }}>
                            Please choose an option which works best for your financial growth journey
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={6} display="flex" justifyContent="center" alignItems="center" sx={{pb:2}}>
                
                        <ActionCard cardDetail={'Create a group'} icon="createGroupIcon.png"/>
                    
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" alignItems="center" sx={{pb:2}}>
                
                      <ActionCard cardDetail={'Join a group'} icon="joinGroupIcon.png"/>
                 
                </Grid>
                
            </Grid> 


        </div>
    );
}
