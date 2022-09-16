/// <reference types="react-scripts" />
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      bgMain: string;
      bgWhite: string;
      stroke: string;
    };

    fontsSizes: {
      time: string;
      chat: string;
      default: string;
      large: string,
      small: string,
    }
  }
}