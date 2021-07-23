<template>
  <v-app>
    <v-main>
      <Header />
      <Category />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Category from "@/components/home/Category";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Category,
  },
  data: () => ({
    //
  }),
  computed: {
    currentRouteName() {
      console.log("this.route", this.$route.name);
      return this.$route.name;
    },
    ...mapGetters({
      authUser: "auth/authUser",
    }),
  },
  mounted() {
    //Clear the browser cache data in localStorage when closing the browser window
    window.onbeforeunload = function () {
      var storage = window.localStorage;
      storage.clear();
    };
  },
  methods: {
    ...mapActions({
      getUser: "auth/ACTION_SAVE_AUTH_USER",
    }),
  },
  created() {
    const email = localStorage.getItem("email");
    if (!this.authUser) {
      this.getUser(email);
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
