import { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Component } from 'react';

interface IProps {
  rows: object[];
  columns: GridColDef[];
  checkboxSelection?: boolean | undefined;
  theme: Theme;
  getRowId?(row: any): string;
}

export class DataTable extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ height: 800, width: '100%' }}>
        <DataGrid
          sx={{
            borderColor: 'primary.dark',
            color: 'text.secondary',
            backgroundColor: 'background.paper',
            '& .MuiDataGrid-columnHeaders': {
              borderColor: 'primary.dark',
            },
            '& .MuiDataGrid-cell': {
              borderColor: 'primary.dark',
            },
            '& .MuiDataGrid-footerContainer': {
              border: '0',
            },
            '& .MuiTablePagination-root': {
              color: 'text.secondary',
            },
            '& .MuiButtonBase-root-MuiIconButton-root': {
              color: 'inherit',
            },
            '& .MuiDataGrid-booleanCell[data-value="false"]': {
              color: 'inherit',
            },
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 15px 25px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
          }}
          rows={this.props.rows}
          getRowId={this.props.getRowId}
          columns={this.props.columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
              },
            },
          }}
          pageSizeOptions={[50]}
          checkboxSelection={this.props.checkboxSelection}
          disableRowSelectionOnClick
        />
      </Box>
    );
  }
}
