<template>
  <div class="main">
    <v-row class="row-main">
      <v-col class="col-main">
        <v-row>
          <v-col lg="3">
            <v-row class="title">LƯƠNG DUY ANH</v-row>
            <v-row class="sub-text">
              <v-col>Địa chỉ</v-col>
            </v-row>
            <v-row class="sub-text">
              <v-col>Số điện thoại</v-col>
            </v-row>
          </v-col>
          <v-col lg="3">
            <v-row class="title">NGUYỄN XUÂN TRƯỜNG</v-row>
            <v-row class="sub-text">
              <v-col>Địa chỉ</v-col>
            </v-row>
            <v-row class="sub-text">
              <v-col>Số điện thoại</v-col>
            </v-row>
          </v-col>
          <v-col lg="3">
            <v-row class="title">CONTACT</v-row>
            <div class="sub-text footer-flex">
              <div>
                <span>
                  <button>
                    <a href="https://www.facebook.com" target="_blank">
                      <img
                        width="25"
                        height="20"
                        src="@/assets/svg/ic_facebook.svg"
                      />
                    </a>
                  </button>
                </span>
              </div>
              <div>
                <span>
                  <button>
                    <a href="https://www.youtube.com" target="_blank">
                      <img
                        width="25"
                        height="20"
                        src="@/assets/svg/ic_youtube.svg"
                      />
                    </a>
                  </button>
                </span>
              </div>
              <div>
                <span>
                  <button>
                    <a href="https://www.instagram.com" target="_blank">
                      <img
                        width="25"
                        height="20"
                        src="@/assets/svg/ic_ig.svg"
                      />
                    </a>
                  </button>
                </span>
              </div>
            </div>
          </v-col>
          <v-col lg="3">
            <v-row class="title">CONNECT WITH US</v-row>
            <div class="sub-text">
              <div>
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_location.svg"
                  />
                  Ha Noi, Viet Nam.
                </span>
              </div>
              <div>
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_phone.svg"
                  />
                  09696969
                </span>
              </div>
              <div>
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_mail.svg"
                  />
                  luongduyanh1999@gmail.com
                </span>
              </div>
              <div class="end-point">
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_globe.svg"
                  />
                  www.techzones.com
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="coppy-right">
      <v-col class="center">CoppyRight@ 2021 by LDA|TRUONG </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "web-footer",
};
</script>
<style lang="scss" scoped>
.row-main {
  margin: 0 !important;
  //   height: 65vh;
  background-color: #f7f7f0;
  color: #1e2022;
  padding: 2%;
}
.end-point {
  margin-bottom: 3rem !important;
}
.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
}
.sub-text {
  font-size: 14px;
  div {
    margin-bottom: 8px;
    button {
      border-radius: 50%;
      border: 1px solid #1e2022;
      margin-right: 1rem;
      text-align: center;
      width: 3rem;
      height: 3rem;
    }
  }
}
.coppy-right {
  margin: 0 !important;
  background-color: #dfdfd5;
  .center {
    text-align: center;
    height: 3rem;
    color: #1e2022;
    font-weight: 600;
  }
}

.footer-flex {
  display: flex;
}
</style>
