import { useState } from 'react'
import { Typography, TextField, Container, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({
    field: {
        display:'block',
        marginTop:20,
        marginBottom: 20
    }
})


const CreateNotes = () => {

    const classes = useStyle()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [category, setCategory] = useState('')

    const [isTitle, setIsTitle] = useState(false)
    const [isDetails, setIsDetails] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        setIsTitle(false)
        setIsDetails(false)
        if(title === '') setIsTitle(true)
        if(details === '') setIsDetails(true)
        if(title && details) console.log(title, details, 'are the contents')
    }
    
    return(
        <Container>
            <Typography color='textSecondary' variant='h2' gutterBottom>Create a Note</Typography>


            <form noValidate autoComplete='off'>

                <TextField 
                    variant='outlined' className={classes.field} 
                    label='Note Title' fullWidth required 
                    onChange={e => setTitle(e.target.value)}
                    error={isTitle} />

                <TextField 
                    variant='outlined' className={classes.field} 
                    label='Details' fullWidth required multiline rows={4} 
                    onChange={e => setDetails(e.target.value)}
                    error={isDetails} />

                <FormControl className={classes.field}>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio color='primary' />} label="Money" />
                        <FormControlLabel value="todo" control={<Radio color='primary' />} label="To Do" />
                        <FormControlLabel value="reminder" control={<Radio color='primary' />} label="Reminder" />
                        <FormControlLabel value="work" control={<Radio color='primary' />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Button variant='contained' color='primary' type='submit' onClick={onSubmit} endIcon={<KeyboardArrowRightIcon/>} >Submit</Button>

            </form>


        </Container>
    )
    
}

export default CreateNotes