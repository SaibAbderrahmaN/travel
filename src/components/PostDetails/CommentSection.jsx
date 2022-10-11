import React, { useState, useRef } from 'react';
import { Typography, TextField, Button   } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography className={classes.colorRed}  gutterBottom variant="h6">Comments</Typography>


       
  
          {comments?.map((c, i) => (
            <Typography className={`${classes.color} comm`}  key={i} gutterBottom variant="subtitle1">

              <h4>{c.split(': ')[0]}</h4>

             <p> {c.split(':')[1]} </p>


            </Typography>
          ))}
          <div ref={commentsRef} />

        </div>
        <div style={{ width: '70%' }}>
          <Typography className={classes.colorRed} gutterBottom variant="h6">Write a comment</Typography>
          <TextField className={classes.background} fullWidth rows={4} variant="filled"  error id="filled-error"  label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button className={classes.color} style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
