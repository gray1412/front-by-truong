<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg2
        v-for="product in products"
        :key="product.ID"
        class="cart"
      >
        <form @click="$router.push({ name: 'product-detail' })">
          <Product :product="product" />
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./Product.vue";
export default {
  name: "ProductList",
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: {
    Product,
  },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.cart {
  margin: 1rem !important;
}
.v-card {
  height: 400px;
}
.v-card__title {
  font-size: 13px;
  line-height: 16px;
}
.v-card__subtitle {
  display: flex;
  justify-content: space-between;
}
.old-price {
  font-size: 12px;
  text-decoration: line-through;
}
</style>