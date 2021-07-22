<template>
  <v-container fluid class="container">
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Login</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="submit">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                required
                v-model="email"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                v-model="password"
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { ACTION_SET_BEFORE_ROUTER } from "@/stores/common/actions";
export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      prevRoute: null,
    };
  },
  computed: {
    checkRouteBefore() {
      return [
        "login",
        "sign-up",
        "forgot-password",
        "reset-password",
        "notfound",
        "verification-email",
      ].includes(this.prevRoute.name);
    },
  },
  watch: {
    prevRoute(value) {
      this.$store.dispatch(ACTION_SET_BEFORE_ROUTER, value);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  methods: {
    ...mapActions({
      loginForm: "auth/loginForm",
    }),
    submit() {
      // this.$refs.form.validate();
      let data = {
        email: this.email,
        password: this.password,
      };
      localStorage.setItem("email", this.email);
      this.loginForm(data)
        .then(() => {
          if (this.checkRouteBefore) {
            this.$router.push({ name: "home" }, () => {});
          } else {
            this.$router.go(-1);
          }
          // this.$toast.success(this.$t("auth.login_success"));
        })
        .catch((err) => {
          // this.$toast.error(err.data.errors.unauthenticate)
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
}
</style>