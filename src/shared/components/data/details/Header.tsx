import { Box, Stack, Typography } from '@mui/material';
import { Component, ReactNode } from 'react';

interface IProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export class Header extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Stack
        alignContent={'space-around'}
        direction={'row'}
        justifyContent={'space-between'}
        marginTop={4}
        marginBottom={4}
      >
        <Stack>
          <Typography variant="h4">{this.props.title}</Typography>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography fontWeight={'bold'}>{this.props.subtitle}</Typography>
          </Stack>
        </Stack>
        <Box>
          <Stack direction={'row'}>{this.props.children}</Stack>
        </Box>
      </Stack>
    );
  }
}
