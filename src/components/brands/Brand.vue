<template>
  <v-card class="mx-auto" max-width="200">
    <router-link
      :to="'/brands/' + brand.ID + '/products'"
      style="text-decoration: none"
    >
      <v-img
        :src="brand.description"
        max-height="40px"
        :alt="brand.name"
        :id="brand.ID"
      ></v-img>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "Brand",
  props: ["brand"],
};
</script>

<style scoped>
.v-card {
  max-height: 300px;
}

.v-card__image {
  height: 200px;
}
.v-card__title {
  height: 70px;
  font-size: 15px;
  line-height: 18px;
}
.v-card__subtitle {
  display: flex;
  justify-content: space-between;
}
</style>