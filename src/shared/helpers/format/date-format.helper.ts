export const DateFormatHelper = {
  format: (
    value: string,
    options: Intl.DateTimeFormatOptions = {
      dateStyle: 'short',
      timeStyle: 'short',
    },
  ) => {
    return value
      ? Intl.DateTimeFormat('pt-BR', options).format(new Date(value))
      : '';
  },
};
