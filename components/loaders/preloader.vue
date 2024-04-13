<template>
    <div class="loader-container" >
        <div class="loader"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  z-index: 10;
}

.loader {
  border: 8px solid #b9b9b9;
  border-top: 8px solid #09c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>