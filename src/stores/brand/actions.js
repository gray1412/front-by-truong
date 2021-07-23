import axios from "axios";

export function getBrands({ commit }) {
  let url = "http://localhost:8000/api/brands";
  axios
    .get(url)
    .then((response) => {
      commit("setBrands", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getProductsByBrands({ commit }, id) {
  let url = "http://localhost:8000/api/brands/" + id + "products";
  axios
    .get(url)
    .then((response) => {
      commit("sets", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function brandDetails({ commit }, id) {
  let url = "http://localhost:8000/api/brands/" + id;
  axios
    .get(url)
    .then((response) => {
      commit("setBrand", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
