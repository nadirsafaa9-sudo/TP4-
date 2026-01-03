<template>
  <div class="container">
    <h2>Ajouter un Job</h2>
    <form @submit.prevent="addJob">
      <input v-model="title" placeholder="Titre" required />
      <textarea v-model="description" placeholder="Description" required></textarea>
      <label>
        <input type="checkbox" v-model="completed" /> Terminé
      </label>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      completed: false
    }
  },
  methods: {
    addJob() {
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          completed: this.completed
        })
      })
      .then(() => this.$router.push('/'))
      .catch(err => console.error(err))
    }
  }
}
</script>
