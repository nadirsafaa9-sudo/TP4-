<template>
  <div class="container">
    <h2>Détails du Job</h2>
    <p><strong>Titre:</strong> {{ job.title }}</p>
    <p><strong>Description:</strong> {{ job.description }}</p>
    <p><strong>Status:</strong> {{ job.completed ? 'Terminé' : 'En cours' }}</p>
    <router-link to="/"><button>Retour</button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return { job: {} }
  },
  mounted() {
    const id = this.$route.params.id
    fetch(`http://localhost:3000/jobs/${id}`)
      .then(res => res.json())
      .then(data => this.job = data)
  }
}
</script>
