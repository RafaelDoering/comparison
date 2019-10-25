<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: 'Message',
  props: [ 'message' ]
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 3rem;
}
</style>
