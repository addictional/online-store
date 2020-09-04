// import original module declarations
import 'styled-components';

type tablet = '768px';
type hd = '1024px';
type fullHD = '1920px';

type resolution = tablet | hd | fullHD

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    breakpoints: {
      tablet: tablet,
      hd: hd
      fullHD: fullHD,
    },  
    colors: {
      main: string;
      black: string;
      lightBlack: string;
      lightGray: string;
      strongGray: string;
      white: string;
    },
    max(resolution : resolution) : string;
    min(resolution : resolution) : string;
  }
}