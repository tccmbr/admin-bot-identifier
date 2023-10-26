import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Components, Helpers, Services, Types } from '../../../../shared';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Show = () => {
  const theme = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { id } = useParams();
  const [sessionData, setSessionData] = useState<Types.SessionType | null>();
  const [dbIpLookupData, setDbIpLookupData] =
    useState<Types.DbIpLookupType | null>();
  const [sessionInfo, setSessionInfo] = useState<
    Array<Types.VerticalDataCard.DataType>
  >([]);
  const [dbIpLookupInfo, setDbIpLookupInfo] = useState<
    Array<Types.VerticalDataCard.DataType>
  >([]);
  const sessionSearchService = useMemo(() => new Services.Session.Search(), []);
  const dbIpLookupSearchService = useMemo(() => new Services.DbIp.Search(), []);

  useEffect(() => {
    if (!id) return navigate('/');

    (async () => {
      await sessionSearchService.findOne(id);

      if (!sessionSearchService.success) return navigate('/');

      setSessionData(sessionSearchService.data);
    })();

    return () => {
      setSessionData(null);
    };
  }, [dbIpLookupSearchService, sessionSearchService, id, navigate]);

  useEffect(() => {
    if (!sessionData) return;

    setSessionInfo([
      {
        key: 'Player ID',
        value: sessionData.playerId,
      },
      {
        key: 'IP',
        value: sessionData.ip,
      },
      {
        key: 'User Agent',
        value: sessionData.userAgent,
      },
      {
        key: 'Cadastrado em',
        value: Helpers.DateFormatHelper.format(sessionData.createdAt),
      },
      {
        key: 'Bot?',
        value: sessionData.isBot ? 'Sim' : 'Não',
      },
      {
        key: 'Spammer?',
        value: sessionData.isSpammer ? 'Sim' : 'Não',
      },
    ]);
  }, [sessionData]);

  useEffect(() => {
    if (!sessionData) return;

    if (sessionData?.ip) {
      (async () => {
        await dbIpLookupSearchService.findByIp(sessionData.ip);

        if (dbIpLookupSearchService.success)
          setDbIpLookupData(dbIpLookupSearchService.data);
      })();
    }

    return () => {
      setDbIpLookupData(null);
    };
  }, [sessionData, dbIpLookupSearchService]);

  useEffect(() => {
    if (!dbIpLookupData) return;

    setDbIpLookupInfo([
      {
        key: 'Tipo de Endereço',
        value: dbIpLookupData.addr_type,
      },
      {
        key: 'Início do Endereço IP',
        value: dbIpLookupData.ip_start,
      },
      {
        key: 'Fim do Endereço IP',
        value: dbIpLookupData.ip_end,
      },
      {
        key: 'Continente',
        value: dbIpLookupData.continent,
      },
      {
        key: 'País',
        value: dbIpLookupData.country,
      },
      {
        key: 'Código do Estado ou Província',
        value: dbIpLookupData.stateprov_code,
      },
      {
        key: 'Estado ou Província',
        value: dbIpLookupData.stateprov,
      },
      {
        key: 'Distrito ou País',
        value: dbIpLookupData.district,
      },
      {
        key: 'Cidade',
        value: dbIpLookupData.city,
      },
      {
        key: 'CEP',
        value: dbIpLookupData.zipcode,
      },
      {
        key: 'Latitude',
        value: String(dbIpLookupData.latitude),
      },
      {
        key: 'Longitude',
        value: String(dbIpLookupData.longitude),
      },
      {
        key: 'Geo ID',
        value: String(dbIpLookupData.geoname_id),
      },
      {
        key: 'Timezone Offset',
        value: String(dbIpLookupData.timezone_offset),
      },
      {
        key: 'Timezone',
        value: dbIpLookupData.timezone_name,
      },
      {
        key: 'Código Meterorológico',
        value: dbIpLookupData.weather_code,
      },
      {
        key: 'ISP',
        value: dbIpLookupData.isp_name,
      },
      {
        key: 'ASN',
        value: String(dbIpLookupData.as_number),
      },
      {
        key: 'Tipo de Uso',
        value: dbIpLookupData.usage_type,
      },
      {
        key: 'Tipo de Conexão',
        value: String(dbIpLookupData.connection_type),
      },
      {
        key: 'Nome da Empresa',
        value: dbIpLookupData.organization_name,
      },
    ]);
  }, [dbIpLookupData]);

  return (
    <>
      <Grid xs={12} sm={12} md={11}>
        <Components.Button.Back />
        <Components.Data.Details.Header
          title={`Sessão - ${sessionData?._id}` || ''}
        />
        <Components.Data.Details.VerticalDataCard
          title="Informações"
          theme={theme}
          lessThanSmall={lessThanSmall}
          data={sessionInfo}
        />
      </Grid>
      <Grid xs={12} sm={12} md={11} marginTop={4}>
        <Components.Data.Details.VerticalDataCard
          title="IP - Informações"
          theme={theme}
          lessThanSmall={lessThanSmall}
          data={dbIpLookupInfo}
        />
      </Grid>
    </>
  );
};
