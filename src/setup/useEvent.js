import {  computed, onBeforeMount, onMounted, reactive, toRefs, watch, watchEffect } from 'vue'

export default function useEvent() {
    // Lesson Six
    onBeforeMount(() => {
        console.log('before mounted')
    })

    onMounted(() => {
        console.log('mounted')
    })

    const event = reactive({
            capacity: 5,
            attending: ['Tim', 'Bob', 'Marley'],
            spaceLeft: computed(() =>{
                return event.capacity - event.attending.length
            })
        })

        // lesson seven
        watchEffect(() => {
            console.log(event.capacity)
        })

        watch(event, () => {
            console.log('Capacity is ' +  event.capacity)
        })

        setTimeout(() => {
            event.capacity++
            // -> logs 1
          }, 3000)

        function increaseCapacity() {
            event.capacity++
        }
    
        return {
           ...toRefs(event) , increaseCapacity
        }
}