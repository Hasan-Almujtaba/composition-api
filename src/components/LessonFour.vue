<template>
  <div>
      <h1>Lesson Four</h1>
      <p>Capacity {{ capacity }}</p>
      <button @click="increaseCapacity()">Increase Capacity</button>
    <br>
    <br>
    <h2>Attending</h2>
    <p>Space Left : {{ spaceLeft }} out {{ capacity }} Capacity</p>
      <li v-for="(item, i) in attending" :key="i" >{{ item }}</li>
  </div>
</template>

<script>
import {  computed, reactive, toRefs } from 'vue'

export default {
    setup () {
        // const count = ref(10)

        // const attending = ref(['Tim', 'Bob', 'Marley'])

        // const spaceLeft = computed(() => {
        //     return count.value - attending.value.length
        // })

        const event = reactive({
            capacity: 10,
            attending: ['Tim', 'Bob', 'Marley'],
            spaceLeft: computed(() =>{
                return event.capacity - event.attending.length
            })
        })

        function increaseCapacity() {
            event.capacity++
        }
    
        return {
           ...toRefs(event) , increaseCapacity
        }
    }
}
</script>

<style>

</style>