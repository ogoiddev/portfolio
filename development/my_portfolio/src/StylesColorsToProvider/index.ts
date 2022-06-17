import 'styled-components';

export const Themes = {
  main: {
    primary: '#313143',
    secondary: '#b4b7c7',
    light: '#e9f7fc',
    back: '#f5f8fc',
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
