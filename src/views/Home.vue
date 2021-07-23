<template>
  <div class="home">
    <Banner />
    <Product />
    <ProductList />
  </div>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import Product from "../components/products/Product.vue";
import ProductList from "../components/products/ProductList.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Product,
    ProductList,
  },
};
</script>
