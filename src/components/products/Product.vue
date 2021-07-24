<template>
  <v-card class="mx-auto" max-width="200">
    <div style="height: 200px">
      <router-link :to="'/details/' + product.ID">
        <v-img :src="product.image_cover"></v-img>
      </router-link>
    </div>

    <v-card-title>
      <router-link :to="'/details/' + product.ID" style="text-decoration: none">
        <div color="blue darken-2">{{ product.name }}</div>
      </router-link>
    </v-card-title>

    <v-card-subtitle>
      <div class="price">
        <div class="new-price">{{ product.price_cover }}</div>
        <!-- <div class="old-price">14.990.000 ₫</div> -->
      </div>
      <div class="discount">
        <div class="red lighten-1 white--text">
          -- {{ Math.floor(Math.random() * 20) + 5 }} %
        </div>
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
  max-height: 350px;
}

.v-card__image {
  height: 200px;
}
.v-card__title {
  height: 100px;
  font-size: 15px;
  line-height: 18px;
}
.v-card__subtitle {
  display: flex;
  justify-content: space-between;
}
</style>