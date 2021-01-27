import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {postData} from '../FetchServices'
import IconButton from '@material-ui/core/IconButton';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function CreateEmployee() {
  const classes = useStyles();
  const [employee_name, setEmployee_name]= React.useState();
  const [employee_email, setEmployee_email]= React.useState();
  const [employee_id, setEmployee_id] = React.useState();
  const [employee_password, setEmployee_password]= React.useState();
  const [employee_mobile, setEmployee_mobile]= React.useState();
  const[employee_skype_id, setEmployee_skype_id]=React.useState();
  const [employee_profile_pic, setEmployee_profile_pic]= React.useState();

  const  createEmployee=async()=>{
var body ={employee_name:employee_name, employee_email:employee_email, 
employee_id:employee_id, employee_password:employee_password, 
employee_mobile:employee_mobile, employee_skype_id: employee_skype_id, employee_profile_pic:employee_profile_pic}
console.log('result', body)
let result = await postData('createemp', body)

if(result.RESULT){
    console.log('record submitted')
}
else {
    alert('fail')
}
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        Add Employee Profile
        </Typography>
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="employeename"
                name="Employee Name"
                variant="outlined"
                required
                fullWidth
                id="employeeName"
                label="Employee Name"
                autoFocus
                value={employee_name}
                onChange={(event)=>setEmployee_name(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id=""
                label="Employee ID"
                name="empid"
                autoComplete="empid"
                value ={employee_id}
                onChange={(event)=>setEmployee_id(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={employee_email}
                onChange={(event)=>setEmployee_email(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="mobile"
                value={employee_mobile}
                onChange={(event)=>setEmployee_mobile(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pwd"
                label="Password"
                name="password"
                autoComplete="pwd"
                value={employee_password}
                onChange={(event)=>setEmployee_password(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="skypeid"
                label="Skype ID"
                name="skype"
                autoComplete="skype"
                value={employee_skype_id}
                onChange={(event)=>setEmployee_skype_id(event.target.value)}
              />
            </Grid>
            
            
           
          </Grid>
          <TextField
                variant="outlined"
                required
                fullWidth
                id="skypeid"
                label="Skype ID"
                name="skype"
                autoComplete="skype"
                value={employee_profile_pic}
                onChange={(event)=>setEmployee_profile_pic(event.target.value)}
              />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>createEmployee()}
          >
           Create
          </Button>
          <Grid container justify="flex-end">
            
          </Grid>
    
      </div>
    
    </Container>
  );
}