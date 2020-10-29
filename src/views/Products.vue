<template>
<div id="grid-wrap">
  <div id="product-grid">
    <div v-for="product in $root.$data.products" :key="product.id">
      <Product :product = "product"/>
    </div>
  </div>
</div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
    components: {
        Product,
    }
};
</script>

<style scoped>
#product-grid {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    justify-content: center;
}

#grid-wrap {
    width: 100%;

}
</style>