import axios from "axios";

export function getProducts({ commit }) {
  let url = "http://localhost:8000/api/products";
  axios
    .get(url)
    .then((response) => {
      commit("setProducts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function productDetails({ commit }, id) {
  let url = "http://localhost:8000/api/products/" + id;
  axios
    .get(url)
    .then((response) => {
      commit("setProduct", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//To add a product to the cart, we take its information and quantity to add it to a single object
//and then store it in a state.
export function addCart({ commit, getters }, payload) {
  let cart = getters.cart;
  let data = payload.product;
  data["quantity"] = payload.quantity;
  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart)); // luu vao localstorage
  commit("setCart", cart);
}

export function removeCart({ commit, getters }, id) {
  let cart = [];
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.ID !== id) {
        cart.push(element);
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  //neu ko co product trong cart thi xoa cart trong localstorage
  if (JSON.parse(localStorage.getItem("cart")).length == 0) {
    localStorage.removeItem("cart", JSON.stringify(cart));
  }
  commit("setCart", cart);
}
