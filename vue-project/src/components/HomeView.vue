<template>
  <div class="container">
    <NavFilter @filter="applyFilter" />
    <div v-for="job in filteredJobs" :key="job.id" class="job-card">
      <h2>{{ job.title }}</h2>
      <p>{{ job.description }}</p>
      <p>Status: <strong>{{ job.completed ? 'Terminé' : 'En cours' }}</strong></p>
      <div class="buttons">
        <router-link :to="`/edit/${job.id}`"><button>Éditer</button></router-link>
        <router-link :to="`/job/${job.id}`"><button>Détails</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavFilter from './NavFilter.vue'

export default {
  components: { NavFilter },
  data() {
    return {
      jobs: [],
      filterType: 'all'
    }
  },
  computed: {
    filteredJobs() {
      if (this.filterType === 'all') return this.jobs
      if (this.filterType === 'completed') return this.jobs.filter(j => j.completed)
      if (this.filterType === 'pending') return this.jobs.filter(j => !j.completed)
    }
  },
  methods: {
    fetchJobs() {
      fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.error(err))
    },
    applyFilter(type) {
      this.filterType = type
    }
  },
  mounted() {
    this.fetchJobs()
  }
}
</script>
