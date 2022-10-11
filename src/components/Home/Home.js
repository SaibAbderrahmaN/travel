import React,{useState} from 'react'
import Posts from '../posts/Posts';
import Forms from '../form/Forms'
import { Container,  Grow, Grid, Paper ,AppBar ,TextField,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts'
import { useNavigate , useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


import PAgination from '../Pagination';
import useStyles from './styles';
import { GoogleOAuthProvider } from '@react-oauth/google'
import Main from '../main/Main';

const user = JSON.parse(localStorage.getItem('profile'))

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
 

const Home = () => {
  const [currentID, setCurrentID] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch()
  const query = useQuery();

  const navigator = useNavigate()
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])






  const searchPost = ()=>{
    if(search.trim() || tags){
      console.log(search)
      //dispatch fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigator(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    }else{
      navigator('/')
    }
  }


  const handleKeyPress = (e)=>{
    if(e.keyCode= 13){
      //search by keyPress
    }
  }
  const handleAdd = (tag) => setTags([...tags , tag])
  const handleDelete = (tagToDelete)=> setTags(tags.filter((tag)=> tag !== tagToDelete))
  return (



    < >
       <Main />
       <>
       <div className="heading" id='memories'>
                <h1>memories</h1>
                <span> let us know about the best trip you ever have </span>
        </div> 
       <Grow in>
         <Container  maxWidth="xl">
         <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
               <Grid  item xs={12} sm={6} md={9}>
               <Posts  setCurrentID={setCurrentID} />
               {(!searchQuery && !tags.length) && (
                  <Paper elevation={6} className={`${classes.pagination} margin`} >
                  <PAgination  page={page} />
                 </Paper> 
              
               )}
               </Grid >
              <Grid item xs={12} sm={6} md={3}>
                <AppBar id='search' className={classes.appBarSearch} position='static' color='inherit' >
                  <TextField  name='search' variant='outlined' label='Search Memories' fullWidth 
                  onKeyPress={handleKeyPress}
                  value={search} 
                  onChange={(e)=>{setSearch(e.target.value)}}
                  />
                  <ChipInput 
                  style={{margin:'10px 0'}}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label='Search Tags'
                  variant='outlined'
                  />
                  <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'> search</Button>

                </AppBar>
               <Forms currentID={currentID} setCurrentID={setCurrentID} />
            
             </Grid>
          </Grid>
         </Container>
       </Grow>
       </>

    </>
 
  )
}

export default Home
  




