import React, { useState, useEffect } from "react";
import {
  Grow,
  Container,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import Chip from "@mui/material/Chip";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles";
import Paginate from "../Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0); //null si no hay id selecionado para editar la publicacion
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                value="test"
                onChange={() => {}}
              />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Paginate />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
