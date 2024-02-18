// import Link from 'next/link'
import { Inter } from "next/font/google";
import { Grid, Typography } from '@mui/material';
import Navbar from "@/components/Navbar";
import Link from '@mui/material/Link';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import InputSubscription from "@/components/InputSub";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom sx={{ color: '#012A4A', textAlign: "center", mt: '15%', mx: '15%' }}>
            <b>Empowering Each Turn</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ color: '#012A4A', textAlign: "center" }}>
            Facilitating your financial wellness and community support through rotating savings model
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mx: "20%" }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#012A4A', textAlign: "center", mt: '5%', mx: '10%' }}>
            Join our mailing list!
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mx: "20%" }}>
          <InputSubscription />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">

          <Button variant="solid" sx={{ bgcolor: "#012A4A", textAlign: 'center' }}><Link href="dashboard" sx={{ color: "white", textDecoration: "none"}}>Proceed to demo app</Link></Button>
        </Grid>
      </Grid>

    </>

  );
}
