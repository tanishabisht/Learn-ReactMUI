import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { TypographyPage, CreateNotes, DisplayNotes, TablePage } from './Pages'
import { Layout } from './Components'
import './App.css'


function App() {
  return (
    <HashRouter>
        <Switch>
          <Layout>
            <Redirect from='/' to='/typography' exact/>
            <Route exact path='/typography' component={TypographyPage} />
            <Route exact path='/shownotes' component={DisplayNotes} />
            <Route exact path='/createnotes' component={CreateNotes} />
            <Route exact path='/table' component={TablePage} />
          </Layout>
        </Switch>
    </HashRouter>
  )
}


export default App