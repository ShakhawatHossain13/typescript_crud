import React from "react" ; 
import { makeStyles,Grid, Paper , createStyles} from "@material-ui/core"; 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>
    createStyles({
        grid :{
            width: '100%',
            margin: 0,
            gap: '0px',
            borderRadius: '0px',
        },
        paper:{
            padding: theme.spacing(5),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            background: theme.palette.success.light,
            borderRadius:'0px',  
        },
    }
))

const GridDesign:React.FC =()=>{ 
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid container spacing={1} className={classes.grid} >
                <Grid item xs={12} md={6} >
                     <Paper className={classes.paper}>
                            <Typography   variant="h5" component="h5">
                                Head
                            </Typography>
                    </Paper>                   
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                            <Typography   variant="h5" component="h5">
                                Head
                            </Typography>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} xs={12}  >
                     <Card  >
                        <CardActionArea>                           
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h5">
                                Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                foot 1
                            </Button>
                            <Button size="small" color="primary">
                                foot 2
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3} md={6}  xs={12}>
                <Card  >
                        <CardActionArea>                           
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h5">
                            Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                foot 1
                            </Button>
                            <Button size="small" color="primary">
                                foot 2
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={6} md={12} xs={12} >
                    <Card>
                        <CardActionArea>                           
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h5">
                            Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                foot 1
                            </Button>
                            <Button size="small" color="primary">
                                foot 2
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12} >
                    <Card>
                        <CardActionArea>                           
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h5">
                            Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                foot 1
                            </Button>
                            <Button size="small" color="primary">
                                foot 2
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12} >
                    <Card>
                        <CardActionArea>                           
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h5">
                            Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                foot 1
                            </Button>
                            <Button size="small" color="primary">
                                foot 2
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12}  >
                     <Paper className={classes.paper}>
                        <Typography   variant="h5" component="h5">
                                Footer
                        </Typography></Paper>                   
                </Grid>
            </Grid>
        
        </React.Fragment>
    )
}

export default GridDesign;