<template>
  <div>
      <h1>Lesson Two</h1>
      <p>Capacity {{ count }}</p>
      <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import {  ref } from 'vue'

export default {
    setup () {
        const count = ref(100)

        function increaseCapacity() {
            count.value++
        }
    
        return {
            count,
            increaseCapacity
        }
    }
}
</script>

<style>

</style>