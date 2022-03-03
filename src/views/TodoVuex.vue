<template>
    <h1>Lista de tareas de Thanos</h1>
    <!-- <h4>Tareas: {{$store.state.todos.length}}</h4> -->
    <h4>Pendientes: {{pending.length}}</h4>
   

</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
    setup() {

        const  store = useStore() 
        
        return {
            pending: computed(() => store.getters['pendingTodos'])
        }


    }

}
</script>

<style>

</style>