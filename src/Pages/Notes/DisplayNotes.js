
import { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { NoteCard } from '../../Components'
import Masonry from 'react-masonry-css'


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

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return(
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column" >
            {notes.map(note => <NoteCard note={note} handleDelete={handleDelete} /> )}
        </Masonry>
    )
}

export default DisplayNotes





// BASIC GRID LAYOUT
// <Grid container>
//     <Grid item xs={12} sm={6} md={3}><Paper>1</Paper></Grid>
//     <Grid item xs={12} sm={6} md={3}><Paper>1</Paper></Grid>
//     <Grid item xs={12} sm={6} md={3}><Paper>1</Paper></Grid>
// </Grid>



// GRID LAYOUT WITH MAPPED COMPONENTS
// <Container>
//     <Grid container spacing={3}>
//         {notes.map(note => (
//             <Grid item key={note.id} xs={12} md={6} lg={4}>
//                 <NoteCard note={note} handleDelete={handleDelete} />
//             </Grid>
//         ))}
//     </Grid>
// </Container>