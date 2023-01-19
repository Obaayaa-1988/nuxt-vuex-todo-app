<template>
  <div>
    <main >
      <div class="flex justify-between">
      

          <div class=" mx-auto pt-16 ">
            <img src="images/todo.svg.svg" alt="PanCake" class=" object-cover w-full  " />
          
          </div>



        <div class="bg-indigo-500 w-2/4 h-screen text-center rounded-l-lg">
          <div class=" text-white">
            <h1 class="text-2xl font-bold py-12">TODO  LIST</h1>
            <!-- <p>Create a list of todos</p> -->
          
          </div>

          <div class="">
            <input type="text" v-model="newTodo" placeholder="add a new todo" @keypress.enter="addTodo" class="h-12 w-2/3 rounded md outline-none pl-2" />
            <button @click="addTodo" class="bg-black text-white py-3 px-8 rounded">add</button>
          </div>
    

        </div>

  

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
