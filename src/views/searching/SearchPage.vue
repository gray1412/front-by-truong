<template>
  <v-row class="search">
    <v-col cols="8">
      <v-dialog max-width="600">
        <template v-slot:activator="">
          <v-col cols="12">
            <form @submit.prevent="submit">
              <v-text-field
                class="border-input input-edit search-bar"
                filled
                rounded
                dense
                height="30"
                color="#171717"
                placeholder="Search"
                v-model="searchText"
              >
              </v-text-field>
            </form>
          </v-col>
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
                <Product :product="product" />
              </v-flex>
            </v-layout>
          </v-container>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import axios from "@/utils/axios";
import Product from "@/components/products/Product";
export default {
  name: "Searching",
  components: {
    Product,
  },
  data() {
    return {
      searchText: "",
      products: [],
    };
  },
  methods: {
    submit() {
      axios.get(`/search/${this.searchText}`).then((response) => {
        this.products = response.data;
      });
    },
  },
};
</script>

<style>
.cart {
  margin: 1rem !important;
}
</style>