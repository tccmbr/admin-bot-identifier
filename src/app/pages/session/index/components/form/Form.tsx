import { Button, Container } from '@mui/material';
import { Components } from '../../../../../../shared';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useContext } from 'react';
import SearchContextForm from '../../contexts/SearchContext';

export const Form = () => {
  const {
    setSearchParams,
    searchParams,
    playerOptions,
    SEARCH_PARAMS_DEFAULT_VALUES,
  } = useContext(SearchContextForm);

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container marginTop={4} spacing={4} marginBottom={4}>
        <Grid xs={12} sm={12} md={2}>
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
        </Grid>
        <Grid xs={12} sm={12} md={2}>
          <Components.Form.SelectField
            id="playerFilter"
            label="Player"
            onChange={(e) =>
              setSearchParams({ ...searchParams, playerId: e.target.value })
            }
            value={searchParams.playerId}
            name="playerFilter"
            options={playerOptions}
          />
        </Grid>
        <Grid xs={12} sm={12} md={2}>
          <Components.Form.SelectField
            id="isBotFilter"
            label="É bot?"
            onChange={(e) =>
              setSearchParams({ ...searchParams, isBot: e.target.value })
            }
            value={searchParams.isBot}
            name="isBotFilter"
            options={['Sim', 'Não']}
          />
        </Grid>
        <Grid xs={12} sm={12} md={2}>
          <Components.Form.SelectField
            id="isSpammerFilter"
            label="É Spammer?"
            onChange={(e) =>
              setSearchParams({ ...searchParams, isSpammer: e.target.value })
            }
            value={searchParams.isSpammer}
            name="isSpammerFilter"
            options={['Sim', 'Não']}
          />
        </Grid>
        <Grid xs={12} sm={12} md={2}>
          <Components.Form.SelectField
            id="limitFilter"
            label="Limite"
            onChange={(e) =>
              setSearchParams({ ...searchParams, limit: e.target.value })
            }
            value={searchParams.limit}
            name="limitFilter"
            options={['100', '1000', '10000', '100000']}
          />
        </Grid>
        <Grid xs={12} sm={12} md={2}>
          <Button
            variant="contained"
            onClick={() => setSearchParams(SEARCH_PARAMS_DEFAULT_VALUES)}
            sx={{
              padding: 2,
            }}
            id="clearFilters"
            title="Limpar filtros do formulário"
          >
            Limpar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
