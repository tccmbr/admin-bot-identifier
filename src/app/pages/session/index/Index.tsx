import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { SearchContextFormProvider } from './contexts/SearchContext';
import { Form } from './components/form/Form';
import { Table } from './components/table/Table';
import { Header } from './components/header/Header';

export const Index = () => {
  return (
    <Grid xs={12} sm={12} md={11}>
      <Header />
      <SearchContextFormProvider>
        <Form />
        <Table />
      </SearchContextFormProvider>
    </Grid>
  );
};
