<template>
  <div>
    <h1>Todo App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Ajouter Job</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
