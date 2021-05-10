import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({})


const CreateNotes = () => {

    const classes = useStyle()
    
    return(
        <div>
            <Typography variant='h1'>Create Notes</Typography>
        </div>
    )
    
}

export default CreateNotes