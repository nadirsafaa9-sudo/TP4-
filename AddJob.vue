<template>
  <div>
    <h3>Ajouter un job</h3>
    <input v-model="title" placeholder="Titre">
    <textarea v-model="description" placeholder="Description"></textarea>
    <button @click="addJob">Ajouter</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['jobAdded'],
  setup(props, { emit }) {
    const title = ref('')
    const description = ref('')

    const addJob = () => {
      if(!title.value) return alert('Le titre est obligatoire')
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.value, description: description.value, completed: false })
      }).then(() => {
        title.value = ''
        description.value = ''
        emit('jobAdded')
      })
    }

    return { title, description, addJob }
  }
}
</script>
