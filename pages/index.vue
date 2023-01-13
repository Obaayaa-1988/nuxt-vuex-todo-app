<template>
  <div>
    <main>
      <h1>Task Board</h1>
      <p>Create a list of todos</p>
    </main>

    <div>
      <input type="text" v-model="newTodo" placeholder="add a new todo" @keypress.enter="addTodo" class="border-4 border-indigo-600" />
      <button @click="addTodo">add</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
