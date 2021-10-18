import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);//antes era un array de posts ahora es un objeto donde tenemmos una popiedad post, por lo que debemos destructurar las publicaciones. se cambia a un objeto proqe vamos a tenre musltiples propiedades aqui
  const classes = useStyles();

if(!posts.length && !isLoading) return 'No posts';

  return  (
    isLoading ? <CircularProgress />
   : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
   )
  );
};

export default Posts;
