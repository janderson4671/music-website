<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="product.imageurl" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.blurb}}</p>
    <a class="nav-link btn btn-primary" @click="viewInfo(product)">Details</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
  methods: {
    viewInfo(product) {
      this.$root.$data.focusedProduct = product;

      this.$router.push("/info");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  margin: 1ch;
}
</style>
