import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Image } from 'mui-image'
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function ActionCard({ cardDetail, icon, redirectURI }) {
    const router = useRouter()

    return (
        <Card sx={{ width: 500, maxWidth:600,  border: "1px solid #A9D6E5",  boxShadow: "1px 1px 1px 1px #A9D6E5"}}>
            <CardActionArea  sx={{ minHeight:150}} onClick={() => router.push(redirectURI)}>
                <CardContent>

                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <div>
                            <Typography gutterBottom variant="h5" component="div">
                                {cardDetail}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Image src={icon} width={30} sx={{ flexGrow: 1, justifyContent: 'center' }} />
                        </IconButton>
                        </div>
                    </Grid>


                </CardContent>
            </CardActionArea>
        </Card>
    );
}