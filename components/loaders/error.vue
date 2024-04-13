<template>
    <div class="loader-container" >
        <div class="loader">
            <h1 class="blue">Ooops...</h1>
            <p>It looks like something went <span class="blue">wrong</span></p>
            <p><span class="blue">Refresh</span> page and try again</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(../../public/assets/road.jpg);
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}

.loader {
  margin-top: 50px;
  color: #fff;
  width: 100%;
  max-width: 320px;
  
}
h1 {

    font-size: 5rem;
}
p {
    padding: 5px;
}
.blue {
    color: #09C;
}
</style>