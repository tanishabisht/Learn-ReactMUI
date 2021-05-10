import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({})


const DisplayNotes = () => {

    const classes = useStyle()
    
    return(
        <div>
            <Typography variant='h1'>Display Notes</Typography>
        </div>
    )
}

export default DisplayNotes