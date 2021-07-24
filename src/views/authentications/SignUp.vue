<template>
  <v-container fluid class="container">
    <v-layout row wrap>
      <v-flex xs12 class="text-center">
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="submit">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="full_name"
                label="FullName"
                id="fullName"
                type="text"
                required
                v-model="fullName"
              ></v-text-field>
            </v-flex>
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
                name="phone"
                label="Phone"
                id="phone"
                type="text"
                required
                v-model="phone"
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
                :rules="passwordRules"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                required
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "sign-up",
  components: {},
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 5) || "Password must have 5+ characters",
        (v) => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
        (v) => /(?=.*\d)/.test(v) || "Must have one number",
        (v) => /([!@$%])/.test(v) || "Must have one special character [!@#$%]",
      ],
      confirmPasswordRules: [
        (v) => !!v || "type confirm password",
        (v) =>
          v === this.password || "The password confirmation does not match.",
      ],
    };
  },
  methods: {
    submit() {
      // this.$refs.form.validate();
      let data = {
        email: this.email,
        name: this.fullName,
        phone: this.phone,
        password: this.password,
      };
      // this.vuelidate.$touch();
      // if (!this.vuelidate.$invalid) {
      this.$store.dispatch("auth/signUp", data).then(() => {
        // this.$toast.success(this.$t("verification_email.check_mail"));
        this.$router.push({ name: "login" });
      });
    },
    signUp() {
      // }
    },
  },
};
</script>
<style scoped>
.container {
  margin-bottom: 40px;
}
</style>