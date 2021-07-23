<template>
  <div id="app">
    <div class="row-nav-top">
      <div class="nav-top">
        <router-link class="" to="/cart">
          <img
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
            width="30"
            alt
          />
          <span class="badge badge-danger badge-pill"></span>
        </router-link>
      </div>
      <div class="nav-top" v-if="authUser">
        <div @click="logout">Logout</div>
      </div>
      <div class="nav-top" v-if="!authUser">
        <div @click="$router.push({ name: 'login' })">Login</div>
        <div>|</div>
        <div @click="$router.push({ name: 'sign-up' })">Sign Up</div>
      </div>
    </div>
    <v-row class="navbar">
      <v-col cols="3" lg="3" md="2" sm="2" xs="2">
        <div class="route-home" @click="$router.push({ name: 'home' })">
          DUYANH|TRUONG
        </div>
      </v-col>

      <v-col cols="4" lg="4" md="2" sm="2" xs="2" class="category">
        <v-row>
          <v-col class="nav-hover">
            <router-link to="/posts" style="text-decoration: none"
              >TIN TỨC</router-link
            >
          </v-col>
          <v-col class="nav-hover">
            <router-link to="/brands" style="text-decoration: none"
              >THƯƠNG HIỆU</router-link
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" lg="4" md="6" sm="6" xs="6" class="nav-right">
        <v-row class="search">
          <v-col cols="8">
            <v-dialog max-width="600">
              <template v-slot:activator="">
                <v-col cols="12">
                  <v-form @submit.prevent="search">
                    <v-text-field
                      class="border-input input-edit search-bar"
                      filled
                      rounded
                      dense
                      height="30"
                      color="#171717"
                      placeholder="ESSearch"
                      v-model="searchName"
                    >
                    </v-text-field>
                  </v-form>
                </v-col>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  components: {},
  methods: {
    ...mapActions({ logoutUser: "auth/logout" }),

    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ name: "home" }, () => {});
      });
    },
  },
  computed: {
    ...mapGetters({
      authUser: "auth/authUser",
    }),
    id() {
      return this.$route.params.id;
    },
    nameRoute() {
      return this.$route.name;
    },
    mini() {
      return this.toggleMini;
    },
  },
};
</script>
<style lang="scss">
.v-image__image {
  background-position: none !important;
}
.row-margin {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.col-center {
  display: flex;
  justify-content: center;
}
.col-end {
  display: flex;
  justify-content: flex-end;
}
.btn-close {
  border-radius: 50% !important;
  background-color: #f9f9f9 !important;
  min-width: 36px !important;
}
.btn-close:hover {
  background-color: #dbdbdb;
}
.text-center {
  display: flex;
  align-items: center;
}
.nav-hover {
  cursor: pointer;
}
.row-nav-top {
  // margin: 0!important;
  .nav-top {
    height: 2rem;
    padding-right: 5% !important;
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
    background-color: #dbdbbd;
    align-items: center;
    // padding: 0!important;
    div {
      margin: 0.5rem;
    }
    div:hover {
      cursor: pointer;
    }
  }
}
.terms-title {
  margin-top: 2rem;
  font-size: 18px;
}
.list-terms {
  font-size: 20px;
  color: #171717 !important;
  div {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  div:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.navbar {
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  // margin: 0 !important;
  // border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
  // margin-top: 0px !important;
}
.v-dialog {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 !important;
  max-width: 100% !important;
  border-radius: 0 !important;
}
.v-sheet.v-card {
  border-radius: 0 !important;
}
.v-card__text {
  margin-top: 8px;
}
.route-home {
  font-size: 26px;
  font-weight: 700;
}
.route-home:hover {
  cursor: pointer;
}
.search-bar {
  font-size: 20px !important;
}
.search {
  justify-content: center;
  align-items: center;
  .border-input {
    border-color: #dbdbbd !important;
  }
  .border-input:hover {
    border-color: #dbdbbd !important;
  }
}
.respon-item {
  display: none !important;
  justify-content: flex-end;
}
.btn-logout {
  height: 44px;
  width: 6rem;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #0a0101;
  color: #fafafa;
  font-size: 1rem;
  font-weight: 700;
}
.btn-login {
  margin-left: 1rem;
  height: 44px;
  width: 6rem;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #ffffff;
  color: #0a0101;
  border: 1px solid #dbdbdb;
  font-size: 1rem;
  font-weight: 700;
}
@media screen and (max-width: 568px) {
  //   .icon-bag{
  //   display: none;
  // }
  .respon-menu {
    display: flex;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 1176px) {
  .category {
    display: none;
  }
  .nav-right {
    display: none;
  }
  .respon-item {
    display: flex !important;
  }
}
@media screen and (min-width: 1000px) {
  .btn-login {
    width: 4.5rem !important;
  }
  .btn-logout {
    width: 4.5rem !important;
  }
}
</style>
