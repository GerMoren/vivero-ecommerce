import axios from "axios";

export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_PRODUCT = "GET_CATEGORY_PRODUCT";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";

//ACTION TRAE LISTA DE CATEGORIAS
export const getCategories = () => {
  return (dispatch) => {
    axios
      .get(`https://apivivero.herokuapp.com/products/category`)
      .then((res) => {
        dispatch({
          type: GET_CATEGORY,
          categories: res.data,
        });
      });
  };
};

export const getCategoryById = (id) => {
  return (dispatch) => {
    axios
      .get(`https://apivivero.herokuapp.com/products/category/${id}`)
      .then((cat) => {
        dispatch({
          type: GET_CATEGORY_BY_ID,
          category: cat.data,
        });
      });
  };
};

//ACTION TRAE LISTA DE PRODUCTOS ASIGNADOS A x CATEGORIA
export const getCategoryProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`https://apivivero.herokuapp.com/products/category/?id=${id}`)
      .then((res) => {
        dispatch({
          type: GET_CATEGORY_PRODUCT,
          categoriesProducts: res.data[0].products,
        });
      });
  };
};

export const addCategory = (data) => {
  return (dispatch) => {
    axios
      .post(`https://apivivero.herokuapp.com/products/category`, data)
      .then((category) => {
        dispatch({
          type: ADD_CATEGORY,
          category: category.data,
        });
      });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://apivivero.herokuapp.com/products/category/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_CATEGORY,
          id,
        });
      });
  };
};

export const editCategory = (id, data) => {
  return (dispatch) => {
    axios
      .put(`https://apivivero.herokuapp.com/products/category/${id}`, data)
      .then((category) => {
        dispatch({
          type: EDIT_CATEGORY,
          category: category.data,
        });
      });
  };
};
