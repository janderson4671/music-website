<template>
  <div class="about">
    <h1>Details about {{product.name}} </h1>
    <img :src="product.imageurl" alt="merp">
    <a class="nav-link btn btn-primary" @click="purchase">Purchase this valuable item!</a>
    <p>{{product.infoData}}</p>
  </div>
</template>

<script>
import Loaf from "../loaf.js";
export default {
  created() {
    if (this.$root.data.focusedProduct === undefined) {
      this.$router.push("/")
    }
  },
  computed: {
    product() {
      return this.$root.$data.focusedProduct;
    }
  },
  methods: {
    purchase() {
      Loaf.loaf("Hahahahaha!!!! \nThis is just a fake website...I mean its a real website but it is just not real in the sense that you can buy stuff...I think :)");
    }
  }
}
</script>

<style scoped>
* {
  padding-bottom: 3ch;
}

* {
  width: 60%;
  margin: auto;
}

p {
  margin-top: 4ch;
}
</style>
