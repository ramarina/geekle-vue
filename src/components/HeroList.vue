<template>
<div style="width: 300px">
  <v-select v-model="selectedSuperhero" :options="superheroes" label="name" placeholder="Select your Hero in Vue" />
</div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  name: 'HeroList',
  props: ['superheroes'],
  components: {
    'v-select': vSelect
  },
  data: () => ({
    selectedSuperhero: null,
  })
}
</script>
<style>
  @import "src/assets/hero-list.css";
</style>
