import { Grid, Typography } from '@mui/material';
import CustomPaper from '../../components/CustomPaper';

export default function Home() {
    return (
        <Grid container style={{height: '100vh'}}>
            <Grid item container xs={6}>
                <Grid item xs={12}>
<<<<<<< HEAD
                    <Typography variant='h1'color='text.primary'>Título</Typography>
=======
                    <Typography variant='h1' color='text.primary'>Título</Typography>
>>>>>>> c8abd95bd83254e683b3a833fd9ec7f132d64ffc
                </Grid>
                <Grid item xs={4}>
                    <CustomPaper title='Texto 1'/>
                </Grid>
                <Grid item xs={4}>
                    <CustomPaper title='Texto 2'/>
                </Grid>  
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h2' color='text.primary'>Título 2</Typography>
            </Grid>
        </Grid>
    );
}