import {
  Box,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Theme,
  Typography,
} from '@mui/material';
import { Component } from 'react';
import { Types } from '../../../../shared';

interface IProps {
  theme: Theme;
  lessThanSmall: boolean;
  data: Array<Types.VerticalDataCard.DataType> | [];
  title: string;
}

export class VerticalDataCard extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const totalRows = this.props.data.length;
    const lastIndex = totalRows - 1;

    return (
      <Paper>
        <CardHeader
          title={this.props.title}
          titleTypographyProps={{
            variant: 'body1',
            fontWeight: 'bold',
          }}
          divider="true"
        />
        <Divider />
        <List>
          {this.props.data.map((row, index) => (
            <ListItem
              key={row.key}
              divider={lastIndex !== index ? true : false}
              sx={{ '&:last-child li, &:last-child ul': { borderBottom: 0 } }}
            >
              <ListItemText
                disableTypography={true}
                sx={{
                  display: 'flex',
                  flexDirection: this.props.lessThanSmall ? 'column' : 'row',
                  alignItems: this.props.lessThanSmall
                    ? 'flex-start'
                    : 'center',
                }}
              >
                <Typography variant="h6" fontSize={'0.875rem'} minWidth={400}>
                  {row.key}
                </Typography>
                <Box>
                  <Typography>{row.value}</Typography>
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}
