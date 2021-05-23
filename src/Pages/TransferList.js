import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Checkbox, Button, Paper } from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
    },
    paper: {
        width: 200,
        height: 230,
        overflow: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    }
}))





const not = (a,b) => {
  return a.filter(val => b.indexOf(val) === -1)
}

const intersection = (a,b) => {
  return a.filter(val => b.indexOf(val) !== -1)
}





const TransferList = () => {

  const classes = useStyles()



  const [checked, setChecked] = React.useState([])
  const [left, setLeft] = React.useState([0, 1, 2, 3])
  const [right, setRight] = React.useState([4, 5, 6, 7])

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);



  const handleChecked = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) newChecked.push(value)
    else newChecked.splice(currentIndex, 1)
    setChecked(newChecked)
  }


  const handleAllRight = () => {
    setRight(right.concat(left))
    setLeft([])
  }

  const handleAllLeft = () => {
    setLeft(left.concat(right))
    setRight([])
  }


  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
  }





    const customList = items => (
        <Paper className={classes.paper}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`
                    return (
                        <ListItem key={value} role="listitem" button onClick={handleChecked(value)}>
                            <ListItemIcon>
                                <Checkbox checked={checked.indexOf(value) !== -1} tabIndex={-1} inputProps={{ 'aria-labelledby': labelId }} />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    )
                })}
                <ListItem />
            </List>
        </Paper>
    )





    return (
        <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
            <Grid item>{customList(left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button variant="outlined" size="small" className={classes.button} 
                        onClick={handleAllRight} disabled={left.length===0}> ≫ </Button>
                    <Button variant="outlined" size="small" className={classes.button}
                        onClick={handleCheckedRight} disabled={leftChecked.length === 0}> &gt; </Button>
                    <Button variant="outlined" size="small" className={classes.button}
                        onClick={handleCheckedLeft} disabled={rightChecked.length === 0}> &lt; </Button>
                    <Button variant="outlined" size="small" className={classes.button}
                        onClick={handleAllLeft} disabled={right.length === 0}> ≪ </Button>
                </Grid>
            </Grid>
            <Grid item>{customList(right)}</Grid>
        </Grid>
    )
}



export default TransferList