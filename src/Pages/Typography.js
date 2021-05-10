import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({
    headingStyle: {
        fontStyle: 'oblique'
    }
})


const TypographyPage = () => {

    const classes = useStyle()
    
    return(
        <div>
            <Typography className={classes.headingStyle} variant='h1'>Web Typography</Typography>
            <Typography>Find resources that help you build beautiful websites using web fonts</Typography><hr/>
    
            <Typography variant='h2'>Articles</Typography>
            <Typography>A pick from the best typography arcticles around the web</Typography><hr/>
    
            <Typography variant='h2'>Font Performance</Typography>
            <Typography>Introducing fonts to a web page can have an impact on page load times. Find out how to reduce this overhead</Typography>
            <Button color='primary' variant='outlined'>Find here</Button>
        </div>
    )
}

export default TypographyPage