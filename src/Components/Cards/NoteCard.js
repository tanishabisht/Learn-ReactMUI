import { Card, CardHeader, CardContent, Avatar, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { blue, green, pink, yellow } from '@material-ui/core/colors'


const useStyle = makeStyles({
    avatar: {
        backgroundColor: note => {
            if(note.category==='work') return yellow[700]
            else if(note.category==='todos') return pink[700]
            else if(note.category==='money') return green[500]
            return blue[500]
        }
    }
})


const NoteCard = ({note, handleDelete}) => {

    const classes = useStyle(note)

    return(
        <Card elevation={1}>
            <CardHeader
                avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
                action={<IconButton onClick={() => handleDelete(note.id)}><DeleteOutlinedIcon/></IconButton>}
                title={note.title}
                subheader={note.category} />
            
            <CardContent>
                <Typography variant="body2" color="textSecondary">{note.details}</Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard