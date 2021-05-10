import { Card, CardHeader, CardContent, Avatar, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'


const useStyle = makeStyles({})


const NoteCard = ({note, handleDelete}) => {

    const classes = useStyle()

    return(
        <Card elevation={1}>
            <CardHeader
                avatar={<Avatar>R</Avatar>}
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