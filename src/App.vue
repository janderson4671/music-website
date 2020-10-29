<template>
  <div id="app">
    <div id='breadbag'>
      <div id="slice">
        <div id="toast"></div>
      </div>
      </div>
    <div id="cover-image">
    </div>
    <b-navbar toggleable="lg">
      <a class="navbar-brand" href="/">Music Shop of Music</a>
      <b-navbar-toggle target="nav-collapse">
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" class="nav-link">Home</b-nav-item>
          <b-nav-item to="/products" class="nav-link">Products</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <footer class="footer">
      <a href="https://github.com/janderson4671/music-website">Jason Anderson | Nathan Craddock</a>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#cover-image {
  background-image: url("/images/sheet-music.jpg");
  background-size: cover;
  background-position: center;
  height: 300px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer{
  margin-top: 3ch;
  width: 100%;
  height: 80px;
}

#breadbag {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#slice {
  padding: 1ch;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(109, 102, 38);
  opacity: 0;
  transition: opacity .5s;
  width: 90%;
  height: 90%;
  border-radius: 20px;
}

#toast {
  color: white;
  font-size: 80px;
  font-weight: 900;
}

.show {
  visibility: visible !important;
}

.fade-in {
  opacity: .9 !important;
}
</style>

<script>
export default {};
</script>
