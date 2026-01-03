<template>
  <div class="filter-bar">
    <button @click="$emit('filter', 'all')">Tous</button>
    <button @click="$emit('filter', 'completed')">Terminés</button>
    <button @click="$emit('filter', 'pending')">En cours</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>
