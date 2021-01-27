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
import IconButton from '@material-ui/core/IconButton';
import {postData} from '../FetchServices'

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

export default function CreateHRProfile() {
  const classes = useStyles();
  const [hr_name, setHr_name]= React.useState();
  const[hr_email, setHr_email]= React.useState();
  const[hr_username, setHr_username]= React.useState();
  const[hr_mobile, setHr_mobile]= React.useState();
  const [hr_skype_id, setHr_skype_id]= React.useState();
  const[hr_profile_pic, setHr_profile_pic]= React.useState();
  const[hr_password, setHr_password]= React.useState()

  const createhr=async()=>{
let body ={
  hr_name:hr_name, hr_email: hr_email, hr_username:hr_username,hr_mobile:hr_mobile,hr_skype_id:hr_skype_id,
  hr_password:hr_password, hr_profile_pic:hr_profile_pic
}
console.log('body of hr', body)
var result = await postData('creathr', body)
if (result.RESULT){
  alert('record submitted')
}
else {
  alert('fail to sbmiited')
}
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
        Add HR Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="hr_username"
                name="hr_username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                value={hr_username}
                onChange={(event)=>setHr_username(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                name="hr_name"
                autoComplete="hr_name"
                value={hr_username}
                onChange={(event)=>setHr_name(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="hr_email"
                autoComplete="email"
                value={hr_email}
                onChange={(event)=>setHr_email(event.target.value)}
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
                value={hr_mobile}
                onChange={(event)=>setHr_mobile(event.target.value)}
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
                value={hr_password}
                autoComplete="pwd"
                onChange={(event)=>setHr_password(event.target.value)}
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
                value={hr_skype_id}
                onChange={(event)=>setHr_skype_id(event.target.value)}
              />
            </Grid>
            
            
           
          </Grid>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" value ={hr_profile_pic} onChange={(event)=>setHr_profile_pic(event.target.value)} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>createhr()}
          >
           Create
          </Button>
          <Grid container justify="flex-end">
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}