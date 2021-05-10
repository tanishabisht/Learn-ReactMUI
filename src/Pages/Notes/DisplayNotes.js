
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NoteCard } from '../../Components'


const useStyle = makeStyles({})


const DisplayNotes = () => {

    const classes = useStyle()

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/notes')
            .then(res => setNotes(res.data))
    }, [])


    const handleDelete = id => {
        axios.delete(`http://localhost:8080/notes/${id}`)
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }
    

    return(
        <Container>
            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default DisplayNotes


// <Grid container>
//     <Grid item xs={12} sm={6} md={3}><Paper>1</Paper></Grid>
//     <Grid item xs={12} sm={6} md={3}><Paper>1</Paper></Grid>
//     <Grid item xs={12} sm={6} md={3}><Paper>1</Paper></Grid>
// </Grid>