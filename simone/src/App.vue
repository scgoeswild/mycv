<template>
  <div id="app" class="welcome">
    <div class="home">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.welcome {
    position: relative;
    height: 100%;
}
body {
    background: #f5cd1e;
    color: #222;
    margin: 0;
    height: 100%;
  border: 1px solid #696969;
}
html {
    padding: 1rem;
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  padding: 20px;
}

.home{
  position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    text-align: center;
}
.hello{
    text-align: center;
    transform: translateY(-15%);
    padding: 1rem;
}
</style>
