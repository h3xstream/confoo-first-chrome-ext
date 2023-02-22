<template>
  <div class="container">
    <h1 class="text-primary">Search</h1>

    <p>Query: {{ query }}</p>

    <hr class="border border-primary border-3 opacity-75">

    <CompactFindingList :data=definitionsData>
    </CompactFindingList>
  </div>
</template>

<script>
import CompactFindingList from './components/CompactFindingList.vue'

const def = require('../src/definition.js');

export default {
  name: 'Search',
  components: {
    CompactFindingList
  },
  data: () => ({
    query: null,
    definitionsData: null
  }),
  created() {
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    console.log(params.get("q"));

    this.query = params.get("q");



    this.definitionsData = []

    let definitionUtil = new def.DefinitionUtil();
    definitionUtil.loadDefFile();


    this.definitionsData.push({'acronym':this.query,'definition':definitionUtil.getDefinition(this.query)});

  }

}
</script>