<template>
    <section class="mt-10 lg:mt-20">
        <!-- <h1 class="mb-8 text-3xl font-semibold border-b-4 border-gray-600">Safari Judaica Products</h1> -->
        <div class="grid flex-wrap justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <g-link
                class="z-40 items-center py-10 m-2 text-2xl text-center text-white duration-300 transform rounded-lg shadow-lg category-link px-30 lg:hover:scale-105 transition-scale"
                v-for="edge, index in groupedList"
                :key="edge.node.id"
                :style="catColors[index]"
                :to="edge.node.path"
            >{{ edge.node.name }}</g-link>
        </div>
    </section>
</template>

<static-query>
query {
  categories: allCategory(sortBy: "Name", order: ASC) {
    edges {
      node {
        id,
        name,
        path
      }
    }
  }
  collections: allCollection(sortBy: "Name", order: ASC) {
    edges {
      node {
        id,
        name,
        path
      }
    }
  }
}
</static-query>

<script>
export default {
    name: "CategoriesList",
    data() {
        return {
            groups: [],
            catColors: [
                "background-color:#9A12B3;",
                "background-color:#67809F;",
                "background-color:#765D69;",
                "background-color:#F22613;",
                "background-color:#4ECDC4;",
                "background-color:#019875;",
                "background-color:#F4B350;",
                "background-color:#2E3131;",
                "background-color:#fad859",
                "background-color:#674172;",
                "background-color:#2abb9b;",
                "background-color:#d2527f;",
            ],
        };
    },
    computed: {
      groupedList: function() {
        return [...this.$static.categories.edges, ...this.$static.collections.edges];
      }
    }
};
</script>

<style>
</style>
