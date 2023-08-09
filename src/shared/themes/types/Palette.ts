interface PaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

interface TypeBackground {
  default: string;
  paper: string;
}

type PaletteMode = 'light' | 'dark';

export interface IPalette {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  mode?: PaletteMode;
  text?: Partial<TypeText>;
  background?: Partial<TypeBackground>;
}
