<template>
    <div class="container">
        <h1 class="text-primary">Acronyms</h1>

        <CompactFindingList :data=definitionsData>
        </CompactFindingList>
    </div>
</template>


<script>
import CompactFindingList from './components/CompactFindingList.vue'

export default {
  name: "Popup",
  components: {
    CompactFindingList
  },
  data: () => ({
    definitionsData: null
  }),
  created() {
    // fetch on init
    this.initData();
  },
  methods: {
    async initData() {
      this.definitionsData = [];
    },
    async addAcronym(acronym,definition) {
      
      console.info("Adding "+acronym);
      this.definitionsData.push({'acronym':acronym,'definition':definition});
    },
  }
};
</script>
