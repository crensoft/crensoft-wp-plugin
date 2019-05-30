export const brandPalette = {
  yellow: '#fffb00',
  yellowDark: '#E6E200',
  green: '#64bc46',
  greenDark: '#427e2d',
  purple: '#5000B3',
  blue: '#0071E6',
};

export const theme = {
  palette: {
    primary: {
      main: brandPalette.yellow,
      dark: brandPalette.yellowDark,
    },
    secondary: {
      main: brandPalette.green,
      dark: brandPalette.greenDark,
    },
    tertiary: {
      main: brandPalette.purple, // purple
    },
    neutral: {
      light: '#f5f5f5',
      main: '#dbdbdb',
      dark: '#121212',
    },
    actions: {
      cta: brandPalette.blue, // blue
    },
  },
};
