
import { useHistory, useLocation } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, AppBar, Toolbar, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {format} from 'date-fns'

// Icons
import NotesIcon from '@material-ui/icons/Notes'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import CreateIcon from '@material-ui/icons/Create'
import TableChartIcon from '@material-ui/icons/TableChart'


const drawerWidth = 240

const useStyle = makeStyles(theme => {
    return{
        root: {
            display: 'flex'
        },
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            backgroundColor: '#f4f4f4'
        },
        navTitle: {
            padding: theme.spacing(1)
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flex: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})


const Layout = ({children}) => {

    const classes = useStyle()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <NotesIcon color='primary' />,
            path: 'shownotes',
            id:0
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineIcon color='primary' />,
            path: 'createnotes',
            id:1
        },
        {
            text: 'Typography',
            icon: <CreateIcon color='primary' />,
            path: 'typography',
            id:2
        },
        {
            text: 'Table',
            icon: <TableChartIcon color='primary' />,
            path: 'table',
            id:3
        }
    ]

    return(
        <div className={classes.root}>


        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
                <Typography className={classes.date}>Today is the {format(new Date(), 'do MMMM Y')}</Typography>
                <Typography>Tanisha</Typography>
                <Avatar className={classes.avatar} src='https://picsum.photos/50' />
            </Toolbar>
        </AppBar>

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{paper:classes.drawerPaper,}}
            anchor="left" >
            <Typography variant='h5' className={classes.navTitle}>MATERIAL UI</Typography>
            <List>
                {menuItems.map(item => (
                    <ListItem button key={item.id} 
                        className={location.pathname === `/${item.path}` ? classes.active : null} 
                        onClick={() => history.push(item.path)} >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
        


            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout