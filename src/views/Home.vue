<template>
  <div class="home">
    <h1>We have a swell music shoppe</h1>
    <h3>It's good, but not too good eh!</h3>

    <p>
      Please take a look at our <router-link to="/products">Products</router-link> to see
      what sort of musically-oriented wares we offer.
    </p>
    <img src="/images/guy.jpg" alt="Hi There:) If you found this...something went wrong">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
img {
  width: 90%;
  margin: auto;
}
</style>
