<template>
  <div id="app">
    <select v-model="selectedTab">
      <option value="techcrunch">TechCrunch</option>
      <option value="starwars">StarWars</option>
    </select>
    <hr />
    <TechCrunch v-if="selectedTab === 'techcrunch'" />
    <StarWars v-if="selectedTab === 'starwars'" />
  </div>
</template>

<script>
import TechCrunch from "./components/TechCrunch.vue";
import StarWars from "./components/StarWars.vue";

export default {
  name: "App",
  components: {
    TechCrunch,
    StarWars,
  },
  data() {
    return {
      selectedTab: "techcrunch",
    };
  },

  watch: {
    selectedTab() {
      window.location.hash = "";
    },
  },
};

//beforeCreate --> created --> beforeMounted --> mounted -->
</script>

<style>
/* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
</style>
