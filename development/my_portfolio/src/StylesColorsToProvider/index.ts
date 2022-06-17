import 'styled-components';

export const Themes = {
  main: {
    primary: '#0f454f',
    secondary: '#52b8cc',
    light: '#a8dbe6',
    back: '#EBF9FA',
    contrast: '#ffd166',
  },

  black: '#111',
  white: '#fff',


}

type CustomTheme = typeof Themes;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    main: {
        primary: string;
        secondary: string;
        light: string;
        back: string;
        contrast: string;
    };
    black: string;
    white: string;
  }
}
