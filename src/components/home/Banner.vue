<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="color in colors" :key="color">
      <v-img :src="color" height="100%"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Banner",
  data: () => ({
    model: 0,
    colors: [
      "https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-quang-cao-dien-may_033705887.png",
      "https://dienthoainamdinh.jweb.vn/uploads/dienthoainamdinh/images/Banner_2.jpg",
      "https://asanzo.vn/wp-content/uploads/2017/08/banner-demnguoc.jpg",
      "https://xiaomithanhhoa.vn/wp-content/uploads/2018/10/banner-1-02.jpg",
      "https://theme.hstatic.net/200000013662/1000516037/14/ms_banner_img3.jpg?v=251",
    ],
  }),
};
</script>

<style>
</style>