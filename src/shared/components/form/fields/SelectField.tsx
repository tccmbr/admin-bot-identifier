import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Component } from 'react';

interface IProps {
  value: string;
  options: string[];
  id: string;
  label: string;
  required?: boolean;
  name: string;
  onChange(event: SelectChangeEvent<string>): void;
}

export class SelectField extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <FormGroup>
        <FormControl>
          <InputLabel id={`${this.props.name}-select-label"`}>
            {this.props.label}
          </InputLabel>
          <Select
            error={false}
            id={this.props.id}
            labelId={this.props.label}
            label={this.props.label}
            required={this.props.required || false}
            value={this.props.value}
            onChange={this.props.onChange}
            name={this.props.name}
            title={this.props.label}
          >
            {this.props.options.map((v, index) => (
              <MenuItem key={index} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
    );
  }
}
