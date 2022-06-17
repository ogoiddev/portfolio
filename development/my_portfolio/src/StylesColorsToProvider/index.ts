import 'styled-components';

export const Themes = {
  main: {
    primary: '#313143',
    secondary: '#98a3ca',
    light: '#ddeaf0',
    back: '#ced1d8',
    contrast: '#3ffa90',
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
