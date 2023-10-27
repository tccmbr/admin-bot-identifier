import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Components, Helpers, Services, Types } from '../../../../../../shared';
import {
  GridActionsCellItem,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { InfoRounded } from '@mui/icons-material';
import SearchContextForm from '../../contexts/SearchContext';
import { useTheme } from '@mui/material';

export const Table = () => {
  const theme = useTheme();
  const { searchParams } = useContext(SearchContextForm);
  const navigate = useNavigate();
  const handleEditClick = (id: string) => () => {
    return navigate(`/sessions/${id}`);
  };
  const [rows, setRows] = useState<Array<Types.SessionType>>([]);
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
    <Components.Data.DataTable
      rows={rows}
      columns={columns}
      checkboxSelection={true}
      theme={theme}
      getRowId={(row: Types.SessionType) => row._id}
    />
  );
};
