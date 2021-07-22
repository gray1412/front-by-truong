<template>
  <v-card class="mx-auto" max-width="200">
    <v-img :src="product.image_cover" height="200px"></v-img>

    <v-card-title>
      <div color="blue darken-2">{{ product.name }}</div>
    </v-card-title>

    <v-card-subtitle>
      <div class="price">
        <div class="new-price">{{ product.price_cover }}</div>
        <!-- <div class="old-price">14.990.000 ₫</div> -->
      </div>
      <div class="discount">
        <div class="red lighten-1 white--text">{{product.discount}}</div>
      </div>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>

<style scoped>
.v-card {
  max-height: 300px;
}
.v-card__title {
  font-size: 15px;
  line-height: 18px;
}
.v-card__subtitle {
  display: flex;
  justify-content: space-between;
}
</style>