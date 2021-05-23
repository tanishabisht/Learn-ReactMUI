import { useHistory, useLocation } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, AppBar, Toolbar, Avatar, Paper, IconButton } from '@material-ui/core'
import {format} from 'date-fns'

// Themes
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

// Icons
import NotesIcon from '@material-ui/icons/Notes'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import CreateIcon from '@material-ui/icons/Create'
import TableChartIcon from '@material-ui/icons/TableChart'
import LowPriorityIcon from '@material-ui/icons/LowPriority'
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined'





const drawerWidth = 240

const useStyle = makeStyles((theme) => {
    console.log(theme)
    return {
        root: {
            display: 'flex'
        },
        page: {
            backgroundColor: theme.palette.type==='dark' ? grey[700] : grey[100],
            width: '100%',
            minHeight: '94vh',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            backgroundColor: theme.palette.type==='dark' ? grey[500] : grey[300]
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
    }})





const Layout = ({children, changeTheme, isDark}) => {


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
        },
        {
            text: 'Transfer List',
            icon: <LowPriorityIcon color='primary' />,
            path: 'transferlist',
            id:4
        },
        {
            text: 'Formik',
            icon: <ViewAgendaOutlinedIcon color='primary' />,
            path: 'formik',
            id:5
        }
    ]


    return(
            <Paper className={classes.root}>
                <AppBar className={classes.appBar} elevation={0}>
                    <Toolbar>
                        {<IconButton onClick={changeTheme}>Change Theme</IconButton>}
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

                <Paper className={classes.page}>
                    <div className={classes.toolbar}></div>
                    {children}
                </Paper>
            </Paper>
    )
}

export default Layout