import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography ,ButtonBase} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate  } from 'react-router-dom';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost , likePost ,getPost} from '../../../actions/posts';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';



import useStyles from './styles';


const Post = ( {post,setCurrentID}) => {
  const user = JSON.parse(localStorage.getItem('profile'))

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="large" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="large" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="large" />&nbsp;Like</>;
  };
  const openPost = () => {
    dispatch(getPost(post._id, Navigator));

    navigator(`/posts/${post._id}`);
  };


  return (
  <Card className={classes.card}  raised elevation={6}>
    <ButtonBase
      component="span"
      name="test"
      className={classes.cardAction}
      onClick={openPost}
    >
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2} name="edit">
       <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentID(post._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2"  color='primary' component="h1">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography  className={classes.Message}  component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
      </CardContent>
    </ButtonBase>
    <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
        <Likes />
      </Button>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> &nbsp; Delete
        </Button>
      )}
    </CardActions>
  </Card>

   )
}

export default Post


/*
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
    <div className={classes.overlay}>
      <Typography variant="h6">{post.name}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
    </div>
    {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (

    <div className={classes.overlay2}>
      <Button style={{ color: 'white' }}  size="large" onClick={() => {setCurrentID(post._id)} }><MoreHorizIcon fontSize="large" /></Button>
    </div>
    )}
    <div className={classes.details}>
      <h4 variant="body2" color="textSecondary" component="h2">{post.tags.map((tags) => `#${tags} `)}</h4>
    </div>
    <h2 className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</h2>
    <CardContent>
      <p  className='paragraph' color="textSecondary" component="p">{post.message}</p>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}> <Likes /> </Button>
      {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="middle" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="large" /> Delete
        </Button>
        )}
    </CardActions>
  </Card>

    */