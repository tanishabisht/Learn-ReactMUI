import { Card, CardHeader, CardContent, Avatar, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({})


const Layout = ({children}) => {

    const classes = useStyle()

    return(
        <div>
            {children}
        </div>
    )
}

export default Layout