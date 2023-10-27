import { Divider, Stack, Typography } from '@mui/material';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';

export const Header = () => {
  return (
    <Stack component={'header'}>
      <Typography variant="h3">
        <SmartToyRoundedIcon
          sx={{
            fontSize: 50,
            color: 'primary.dark',
          }}
        />{' '}
        Identificador de Bot
      </Typography>
      <Divider />
    </Stack>
  );
};
