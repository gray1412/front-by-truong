<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-5">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="product.image_cover" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="h1">{{ product.name }}</div>
        <br />
        <p class="lead text-justify">{{ product.description }}</p>
        <div>
          <p class="h2">{{ product.price_cover }}</p>
        </div>
        <AddToCart :product="product" />
      </div>
      <div class="col-1">
        <div class="card text-left shadow-md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../../components/cart/AddToCart";
export default {
  data() {
    return {
      isInCardProp: false,
    };
  },
  computed: {
    ...mapGetters("product", ["product"]),
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails"]),
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
  },
};
</script>

<style>
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}
</style>