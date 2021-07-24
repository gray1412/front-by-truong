<template>
  <nav>
    <div class="menu-item">
      <router-link to="">THIẾT BỊ ĐEO TAY</router-link>
    </div>
    <div class="menu-item"><router-link to="" :id="1">NGHE/NHÌN</router-link></div>
    <div class="menu-item"><router-link to="">LINH KIỆN PC</router-link></div>
    <div class="menu-item"><router-link to="">MÁY TÍNH</router-link></div>
    <div class="menu-item"><router-link to="">GAMING GEAR</router-link></div>
    <div class="menu-item"><router-link to="">CAMERA</router-link></div>
    <div class="menu-item"><router-link to="">PHỤ KIỆN</router-link></div>
  </nav>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: black;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  
}
nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: blue;
}
nav .menu-item a {
  text-decoration: none;
}
</style>