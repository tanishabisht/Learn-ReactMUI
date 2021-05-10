import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { TypographyPage, CreateNotes, DisplayNotes } from './Pages'
import './App.css'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Redirect from='/' to='/typography' exact/>
          <Route exact path='/typography' component={TypographyPage} />
          <Route exact path='/shownotes' component={DisplayNotes} />
          <Route exact path='/createnotes' component={CreateNotes} />
        </Switch>
      </div>
    </HashRouter>
  )
}


export default App