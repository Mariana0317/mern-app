import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionsTypes";
import * as api from "../api";

//action creatores son funciones que devulven acciones
export const getPost = (id) => async (dispatch) => {//esta accion recupera todas las publicaciones
  try {
    dispatch({ type: START_LOADING});
    const { data } = await api.fetchPost(id);
    
    console.log(data);
    dispatch({ type: FETCH_POST, payload: data });//payload es un objeto que contiene tres cosas contiene los datos de las publicaciones, contiene la pagina actual, y tamien el numero de paginas 
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};


export const getPosts = (page) => async (dispatch) => {//esta accion recupera todas las publicaciones
  try {
    dispatch({ type: START_LOADING});
    const { data } = await api.fetchPosts(page);
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });//payload es un objeto que contiene tres cosas contiene los datos de las publicaciones, contiene la pagina actual, y tamien el numero de paginas 
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

//es para obtener publicacion por busqueda, queremos que obtenga una pagina con las publicaciones que coincidan con la busqueda
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING});
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery); //aqui nos comunicacmos con el backend

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING});
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
