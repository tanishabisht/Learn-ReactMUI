import { createMuiTheme } from '@material-ui/core/styles'
import { green, orange, purple} from '@material-ui/core/colors'



export const themeDark = createMuiTheme({
  palette: {
      type: 'dark',
      primary: purple,
      secondary: green
  },
  status: {
      danger: orange
  },
  typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
  }
})


export const themeLight = createMuiTheme({
  palette: {
    type: 'light',
    primary: purple,
    secondary: green
  },
  status: {
    danger: orange
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})