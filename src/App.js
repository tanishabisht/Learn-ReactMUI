import { useState, useEffect } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { TypographyPage, CreateNotes, DisplayNotes, TablePage, TransferList, FormikForms } from './Pages'
import { Layout } from './Components'
import './App.css'

// importing themes
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import {themeDark, themeLight} from './theme'






const useStyle = makeStyles(theme => ({
  floatingBtn: {
    position: 'absolute',
    bottom: '0',
    right: '0'
  }
}))






function App() {

  const classes = useStyle()

  const [isDark, setIsDark] = useState(true)
  const changeTheme = () => {
    console.log(isDark)
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <HashRouter>
        <IconButton className={classes.floatingBtn} onClick={changeTheme}>Change Theme</IconButton>
        <Switch>
            <Layout changeTheme={changeTheme} isDark={isDark}>
              <Redirect from='/' to='/typography' exact/>
              <Route exact path='/typography' component={TypographyPage} />
              <Route exact path='/shownotes' component={DisplayNotes} />
              <Route exact path='/createnotes' component={CreateNotes} />
              <Route exact path='/table' component={TablePage} />
              <Route exact path='/transferlist' component={TransferList} />
              <Route exact path='/formik' component={FormikForms} />
            </Layout>      
        </Switch>
      </HashRouter>  
    </ThemeProvider>  
  )
}


export default App