<template>
  <div>
      <h1>Lesson Five</h1>
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
// import {  computed, reactive, toRefs } from 'vue'
import useEvent from '@/setup/useEvent'

export default {
    setup () {
        const {capacity, spaceLeft, attending, increaseCapacity} = useEvent()

        return {capacity, spaceLeft, attending, increaseCapacity} 
    }
}

// function useEvent() {
//     const event = reactive({
//             capacity: 10,
//             attending: ['Tim', 'Bob', 'Marley'],
//             spaceLeft: computed(() =>{
//                 return event.capacity - event.attending.length
//             })
//         })

//         function increaseCapacity() {
//             event.capacity++
//         }
    
//         return {
//            ...toRefs(event) , increaseCapacity
//         }
// }
</script>

<style>

</style>