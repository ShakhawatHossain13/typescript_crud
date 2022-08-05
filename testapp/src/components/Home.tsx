import React from "react" 
import { makeStyles , createStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';   


const useStyles = makeStyles({
    table: {
      maxWidth: 650,
      margin: 'auto',
      marginTop: '50px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
    },

    heading: {
      textAlign: 'center',
    },

    title:{
      backgroundColor: '#f0f0f0',
    }
  }
  );

  const themeStyles = makeStyles((theme) =>
    createStyles( {
      h1: {
        fontSize: '36px',
        textAlign: 'center',
        padding: theme.spacing(2),
      },
    }
    )
  );
  
  function createData(name: string, bng: number, math: number, eng: number, hst: number) {
    return { name, bng, math, eng, hst };
  }
  
  const rows = [
    createData('Md. Imriaz Uddin', 50, 50, 50, 50),
    createData('Tasnuba Sraboni', 50, 50, 50, 50),
    createData('Md. Shakhawat', 50, 50, 50, 50),
     
  ];
  
  
const Home:React.FC  =()=>{
  const classes = useStyles();
  const themeClasses = themeStyles();
    return(
        <React.Fragment>
          <h1 className={themeClasses.h1} >Marks</h1>         
        <TableContainer component={Paper} className={classes.table} >      
          <Table  aria-label="simple table" >
            <TableHead>
              <TableRow>              
                <TableCell>Name</TableCell>
                <TableCell>Bangla</TableCell>
                <TableCell>Math</TableCell>
                <TableCell>English</TableCell>
                <TableCell>History</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" className={classes.title}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.bng}</TableCell>
                  <TableCell>{row.math}</TableCell>
                  <TableCell>{row.eng}</TableCell>
                  <TableCell>{row.hst}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </React.Fragment>
    )
}

export default Home;