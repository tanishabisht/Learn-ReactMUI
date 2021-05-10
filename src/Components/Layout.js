
import { useHistory, useLocation } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'

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
            icon: <InboxIcon color='primary' />,
            path: 'shownotes',
            id:0
        },
        {
            text: 'Create Note',
            icon: <InboxIcon color='primary' />,
            path: 'createnotes',
            id:1
        },
        {
            text: 'Typography',
            icon: <InboxIcon color='primary' />,
            path: 'typography',
            id:2
        }
    ]

    return(
        <div className={classes.root}>

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
                {children}
            </div>
        </div>
    )
}

export default Layout