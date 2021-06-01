<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HeroList :superheroes="superheroes"/>
  </div>
</template>

<script>
import HeroList from './components/HeroList.vue'

export default {
  name: 'App',
  components: {
    HeroList
  },
  data: () => ({
      selectedSuperhero: null,
      superheroes: [
        {name: 'Elactigirl', code: 'EL'},
        {name: 'Batman', code: 'BA'},
        {name: 'Magneta', code: 'MA'},
        {name: 'Daredevil', code: 'DA'},
        {name: 'Wonder Woman', code: 'WW'}
      ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
