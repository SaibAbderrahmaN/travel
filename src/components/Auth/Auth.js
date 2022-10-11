import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input' ;
import { GoogleLogin  } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google'
import {signup , signIn  } from '../../actions/auth.js'





import { Avatar, Paper,Container,Button ,Grid, Typography} from '@material-ui/core'

const Auth = () => {  
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const [showPassword, setShowPassword] = useState(false)
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState)  
  const [isSignup, setIsSignup] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const switchMode = ()=>  {
    

    setIsSignup((prevSignup)=>!prevSignup)

    setShowPassword(false)
  }
 
   const handelChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

   const handelSubmit = (e)=>{
    e.preventDefault()
    if(isSignup){
      dispatch(signup(formData,navigate))
      

    }else{
      dispatch(signIn(formData,navigate))
      


    }
   }
 

 
  const handleShowPassword =() => setShowPassword((prevShowPassWord)=> !prevShowPassWord)
  const googleSuccess = async (response) => {



    var credent = response.credential.split('.')[1];
    var base64 = credent.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
     const token = response.credential
     const result = JSON.parse(jsonPayload)
     console.log(token)

     try {
      dispatch({type: 'AUTH' , data : { result , token }})
      navigate('/')
      
     } catch (error) {
      
     }
    
     
     
    };
  
  const googleFailure=()=>{alert('google signIn wa unsuccessfully try again later')}
  
  
  
  
  
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}>



        <Container className='margin' component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3} >
                   <Avatar className={classes.avatar}>
                     <LockOutlinedIcon />
                   </Avatar>
                   <Typography variant='h5'>{isSignup ? 'sign is': 'sign up'} 
                   </Typography>
                       <form className={classes.form} onSubmit={handelSubmit}>
                           <Grid container spacing={2}>
                              {isSignup && (
                               <>
                                    <Input name='firstName' label='firstName' handleChange={handelChange} autoFocus half />
                                    <Input name='lastName' label='lastName' handleChange={handelChange}  half  />
                                    
                               </>
    
                             )}
                             <Input name="email" label="Email Address" handleChange={handelChange} type="email" />
                             <Input name='password' label='password' handleChange={handelChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                             {isSignup && <Input name='confirmPassword' label ='repeat passWord'  handleChange={handelChange}  type={showPassword ? 'text' : 'password'} />}
                           </Grid>
                           <Button type='submit' variant='contained' fullWidth color='primary' className={classes.submit} >
                             {isSignup ? 'sing Up' : 'sing in'}
                           </Button>
                           <GoogleLogin  onSuccess={googleSuccess}
                                      onError={googleFailure} />
                           <Grid container justifyContent="flex-end">
                             <Grid item>
                               <Button onClick={switchMode}>
                                 { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                               </Button>
                             </Grid>
                           </Grid>
                   </form>
    
                </Paper>
   
                 
            </Container>
    </GoogleOAuthProvider>

  )
}

export default Auth



/*

                <Paper className={classes.paper} elevation={3} >
                   <Avatar className={classes.avatar}>
                     <LockOutlinedIcon />
                   </Avatar>
                   <Typography variant='h5'>{isSignup ? 'sign is': 'sign up'} 
                   </Typography>
                   <form className={classes.form} onSubmit={handelSubmit}>
                           <Grid container spacing={2}>
                             {isSignup && (
                               <>
                                    <Input name='firstName' label='firstName' handleChange={handelChange} autoFocus half />
                                    <Input name='lastName' label='lastName' handleChange={handelChange}  half  />
                               </>
    
                             )}
                             <Input name="email" label="Email Address" handleChange={handelChange} type="email" />
                             <Input name='password' label='password' handleChange={handelChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                             {isSignup && <Input name='confirmPassword' label ='repeat passWord'  handleChange={handelChange}  type={showPassword ? 'text' : 'password'} />}
                           </Grid>
                           <Button type='submit' variant='contained' fullWidth color='primary' className={classes.submit} >
                             {isSignup ? 'sing Up' : 'sing in'}
                           </Button>
                           <GoogleLogin  onSuccess={googleSuccess}
                                      onError={googleFailure} />
                           <Grid container justifyContent="flex-end">
                             <Grid item>
                               <Button onClick={switchMode}>
                                 { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                               </Button>
                             </Grid>
                           </Grid>
                   </form>
    
                </Paper>
                */