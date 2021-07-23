<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg1
        v-for="brand in brands"
        :key="brand.ID"
        class="cart"
      >
        <Brand :brand="brand" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Brand from "../../components/brands/Brand";
export default {
  name: "BrandList",
  computed: {
    ...mapGetters("brand", ["brands"]),
  },
  components: {
    Brand,
  },
  methods: {
    ...mapActions("brand", ["getBrands"]),
  },
  mounted() {
    this.getBrands();
  },
};
</script>

<style scoped>
.cart {
  margin: 1rem !important;
}
</style>