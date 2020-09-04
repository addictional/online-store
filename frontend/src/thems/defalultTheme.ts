import { DefaultTheme } from 'styled-components'

const Theme: DefaultTheme = {
  borderRadius: '5px',
  breakpoints: {
      tablet: '768px',
      hd: '1024px',
      fullHD: '1920px',
  },  
  colors: {
    main: '#836FE0',
    black: '#000000',
    lightBlack: '#4D4E50',
    lightGray: '#BBBBBB',
    strongGray: '#F4F4F4',
    white: '#ffffff'
  },
  max: (breakpoint) => `@media (max-width: ${breakpoint})`,
  min: (breakpoint) => `@media (min-width: ${breakpoint})`
}

export default Theme;