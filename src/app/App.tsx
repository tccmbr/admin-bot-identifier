import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false}>
        <Grid
          container
          direction={'row'}
          justifyContent={'center'}
          marginTop={4}
          marginBottom={4}
        >
          <Routes />
        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;
