import React,{useState ,useEffect} from 'react'
import {Link ,  useNavigate  , useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  Avatar} from '@material-ui/core';
import useStyles from './styles';
import decode from 'jwt-decode';



const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigator = useNavigate();
  const [ShowNavbar, setShowNavbar] = useState(false)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  

   useEffect(() => {
    
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
     setUser(JSON.parse(localStorage.getItem('profile')))
   }, [location])

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    navigator('/')
    setUser(null)
  }
  

  return (
    <>
       <header className={`header ${ShowNavbar? 'active':'null'}`}>
               
               <Link id="menu-btn"  className="fas fa-bars" onClick={()=> setShowNavbar((prev)=>!prev)} />
                
                <Link data-aos="zoom-in-left" data-aos-delay="150" to="/" className="logo"> <i className="fas fa-hiking "></i> travel </Link>
                
                <nav className={`navbar ${ShowNavbar? 'active':'null'}`}>
                    <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
                    <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">about</a>
                    <a data-aos="zoom-in-left" data-aos-delay="600" href="#search">Search</a>
                    <a data-aos="zoom-in-left" data-aos-delay="750" href="#memories">memories</a>
                </nav>
                
               {user ? (
               <div className={classes.profile}>
               <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
               <h2 className='userName'>{user.result.name} </h2>
               <Link variant='contained' className='btn' color='secondary' onClick={logout}>logout  </Link>
               </div>
                ): 
                (
                 <Link data-aos="zoom-in-left" data-aos-delay="1300" className="btn"  component={Link}  to='/auth'  color='primary'>Sign in  </Link> 
                )}
      </header>
                

    </>


    
    
  )
}

export default Navbar



