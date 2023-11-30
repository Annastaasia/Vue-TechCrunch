<template>
  <div>
    <label
      >Search:
      <input v-model="filters.search" />
    </label>
    <hr />
    <div>
      <button :disabled="page === 1" @click="page -= 1">Prev</button>
      {{ page }}
      <button @click="page = +page + 1">Next</button>
    </div>
    <hr />
    <ul>
      <li v-for="item in items" :key="item.name">
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPlanets } from "../api/swapi";
import { useFilterable } from "../components/use/filterable";

export default {
  data() {
    return {
      items: [],
    };
  },

  methods: {
    async loadItems() {
      const { results } = await getPlanets({
        page: this.page,
        ...this.filters,
      });
      this.items = results;
    },
  },

  created() {
    const { page } = useFilterable({
      loadItems: this.loadItems,
      filters: this.filters,
    });
    this.page = page;
  },
};
</script>
