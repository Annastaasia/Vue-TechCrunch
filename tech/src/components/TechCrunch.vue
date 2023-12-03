<template>
  <div>
    <label
      >Category:
      <select v-model="selectedCategory">
        <option
          v-for="category in availableCategories"
          :value="category.id"
          :key="category.name"
        >
          {{ category.name }}
        </option>
      </select>
    </label>
    <hr />
    <div>
      <button :disabled="page === 1" @click="page -= 1">Prev</button>
      {{ page }}
      <button @click="page = +page + 1">Next</button>
    </div>
    <hr />

    <ul>
      <li v-for="item in items" :key="item.link">
        <a target="_blank" :href="item.link" v-html="item.title.rendered"></a>
      </li>
    </ul>
  </div>
</template>
<script>
import { getPosts, getCategories } from "../api/techcrunch";
import { useFilterable } from "../components/use/filterable";

export default {
  data() {
    return {
      items: [],
      categories: [],
      selectedCategory: null,
      page: 1,
    };
  },
  computed: {
    availableCategories() {
      return [{ id: null, name: "(no category)" }, ...this.categories];
    },
  },
  methods: {
    async loadCategories() {
      this.categories = await getCategories();
    },

    async loadPosts() {
      this.items = await getPosts({
        page: this.page,
        filters: { categories: this.selectedCategory },
      });
    },
  },

  setup() {
    const { page, filters } = useFilterable(
      {
        loadItems: getPosts,
      },
      this
    );
    return { page, filters };
  },

  created() {
    this.loadCategories();
  },

  watch: {
    page() {
      this.loadPosts();
    },
    selectedCategory() {
      this.page = 1;
      this.loadPosts();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
