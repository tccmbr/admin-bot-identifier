import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Components, Helpers, Services, Types } from '../../../../shared';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  GridActionsCellItem,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { InfoRounded } from '@mui/icons-material';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';

export const Index = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    createdAt: '',
  });
  const [rows, setRows] = useState<Array<Types.SessionType>>([]);
  const handleEditClick = (id: string) => () => {
    return navigate(`/sessions/${id}`);
  };
  const sessionSearchService = useMemo(() => new Services.Session.Search(), []);
  const sessionsData = useCallback(async () => {
    await sessionSearchService.findAll(searchParams);
    return sessionSearchService.success
      ? sessionSearchService.response.data
      : [];
  }, [sessionSearchService, searchParams]);

  useEffect(() => {
    (async () => {
      setRows(await sessionsData());
    })();
  }, [sessionsData]);

  const columns: GridColDef[] = [
    {
      field: 'playerId',
      headerName: 'Player ID',
      width: 300,
    },
    {
      field: 'ip',
      headerName: 'IP',
      width: 150,
    },
    {
      field: 'userAgent',
      headerName: 'User Agent',
      width: 500,
    },
    {
      field: 'createdAt',
      headerName: 'Criado em',
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        Helpers.DateFormatHelper.format(params.row.createdAt),
    },
    {
      field: 'isBot',
      headerName: 'Bot?',
      width: 150,
      type: 'boolean',
    },
    {
      field: 'isSpammer',
      headerName: 'Spammer?',
      width: 150,
      type: 'boolean',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={id}
            icon={<InfoRounded color="primary" fontSize="large" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(String(id))}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Grid xs={12} sm={12} md={11}>
      <Typography variant="h3" marginBottom={4}>
        <SmartToyRoundedIcon
          sx={{
            fontSize: 50,
            color: 'primary.dark',
          }}
        />{' '}
        Identificador de Bot
        <Divider />
      </Typography>
      <Box marginBottom={4}>
        <Components.Form.TextField
          error={false}
          helperText={''}
          id="createdAtFilter"
          label="Filtrar por data"
          placeholder=""
          required={true}
          autoComplete="autocomplete"
          onChange={(e) =>
            setSearchParams({ ...searchParams, createdAt: e.target.value })
          }
          value={searchParams.createdAt}
          name="createdAtFilter"
          type="date"
        />
      </Box>
      <Components.Data.DataTable
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        theme={theme}
        getRowId={(row: Types.SessionType) => row._id}
      />
    </Grid>
  );
};
