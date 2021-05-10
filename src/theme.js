import { createMuiTheme } from '@material-ui/core/styles'
import { purple, green, orange} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  status: {
    danger: orange
  }
})

export default theme