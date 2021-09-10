import React, { useState, useEffect } from 'react';
import { Grow, Container, Grid } from '@material-ui/core';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import {useDispatch} from 'react-redux';
import {getPosts } from '../../actions/posts';
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);//null si no hay id selecionado para editar la publicacion
   const dispatch = useDispatch();

     useEffect(() => {
      dispatch(getPosts());
     }, [currentId, dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
