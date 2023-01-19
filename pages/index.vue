<template>
  <div>
    <main class=" h-screen">
      <div class="flex justify-center"> 

        <div class=" ">
          <img src="images/todo.svg.svg" alt="PanCake" class=" object-cover " />
        
        </div>

        
        <!-- <div> 
          <h1>Task Board</h1>
          <p>Create a list of todos</p>

        </div> -->

        <div>
          <input type="text" v-model="newTodo" placeholder="add a new todo" @keypress.enter="addTodo" class="border-4 border-indigo-600" />
          <button @click="addTodo">add</button>
        </div>
  
  


      <div> 
        <!----component-->
        {{ $store.state.todos }}
      </div>
      
    </main>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data (){
    return {
      newTodo: ''
    }
  },

  methods: {
   addTodo(){
    if(this.newTodo){
      this.$store.commit('ADD_TODO', this.newTodo)
      this.newTodo = '';

    }

   }
  }
}
</script>
