<template>
  <div>
      <h1>Lesson Three</h1>
      <p>Capacity {{ count }}</p>
      <button @click="increaseCapacity()">Increase Capacity</button>
    <br>
    <br>
    <h2>Attending</h2>
    <p>Space Left : {{ spaceLeft }} out {{ count }} Capacity</p>
      <li v-for="(item, i) in attending" :key="i" >{{ item }}</li>
  </div>
</template>

<script>
import {  computed, ref } from 'vue'

export default {
    setup () {
        const count = ref(10)

        const attending = ref(['Tim', 'Bob', 'Marley'])

        const spaceLeft = computed(() => {
            return count.value - attending.value.length
        })

        function increaseCapacity() {
            count.value++
        }
    
        return {
            count,
            increaseCapacity,
            attending,
            spaceLeft
        }
    }
}
</script>

<style>

</style>