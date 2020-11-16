<template>
  <div class="home">
    <h1>HomePage</h1>
    <v-btn  class="hidden-md-and-down">Click me</v-btn>
    <v-btn class="hidden-md-and-up">Click me</v-btn>
    <v-btn class="hidden-sm-only">Click me</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>

<style scoped>
button {
  margin-left: 16px;
}
</style>