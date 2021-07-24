<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg2
        v-for="productByBrand in productsByBrand"
        :key="productByBrand.ID"
        class="cart"
      >
        <Product :productByBrand="productByBrand" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./Product.vue";
export default {
  name: "ProductListByBrand",
  computed: {
    ...mapGetters("productByBrand", ["productsByBrand", "productsByBrand"]),
  },
  components: {
    Product,
  },
  methods: {
    ...mapActions("productByBrand", [
      "getProducts",
      "getProductsByBrand",
      "addCart",
      "removeCart",
    ]),
  },
  mounted() {
    this.getProducts();
    this.getProductsByBrand(this.$route.params.idBrand);
  },
};
</script>

<style scoped>
.cart {
  margin: 1rem !important;
}
</style>