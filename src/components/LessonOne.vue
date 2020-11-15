<template>
  <div>
      <h1>Lesson One</h1>
      <p>Capacity {{ count }}</p>
  </div>
</template>

<script>
import {  ref } from 'vue'

export default {
    setup () {
        const count = ref(100)
    
        return {
            count
        }
    }
}
</script>

<style>

</style>