import { TextField as MuiTextField } from '@mui/material';
import { Component } from 'react';

export interface ITextField {
  value: string;
  error: boolean | undefined;
  helperText: string | undefined;
  id?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  type?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
}

export class TextField extends Component<ITextField> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <MuiTextField
        error={this.props.error}
        helperText={this.props.helperText}
        variant="filled"
        onChange={this.props.onChange}
        value={this.props.value}
        id={this.props.id}
        label={this.props.label}
        placeholder={this.props.placeholder}
        required={this.props.required}
        autoComplete={this.props.autoComplete}
        type={this.props.type || 'text'}
        name={this.props.name}
      />
    );
  }
}
