<template>
  <div class="container">
    <h2>Éditer Job</h2>
    <form @submit.prevent="editJob">
      <input v-model="title" placeholder="Titre" required />
      <textarea v-model="description" placeholder="Description" required></textarea>
      <label>
        <input type="checkbox" v-model="completed" /> Terminé
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobId: null,
      title: '',
      description: '',
      completed: false
    }
  },
  mounted() {
    this.jobId = this.$route.params.id
    fetch(`http://localhost:3000/jobs/${this.jobId}`)
      .then(res => res.json())
      .then(data => {
        this.title = data.title
        this.description = data.description
        this.completed = data.completed
      })
  },
  methods: {
    editJob() {
      fetch(`http://localhost:3000/jobs/${this.jobId}`, {
        method: 'PUT',
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
