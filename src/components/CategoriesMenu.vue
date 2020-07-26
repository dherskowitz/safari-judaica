<template>
    <div class="bg-white md:mr-8 rounded-lg shadow-lg">
        <p class="font-semibold mb-6 border-gray-700 border-b-2 pt-4 mx-2">Shop by Category</p>
        <g-link
            class="category-item block w-full px-4 py-2"
            v-for="edge in $static.categories.edges"
            :key="edge.node.id"
            :to="edge.node.path"
            exact
        >{{ edge.node.name }}</g-link>
    </div>
</template>

<script>
export default {
    name: "CategoriesMenu",
};
</script>

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
}
</static-query>

<style>
.category-item.active {
    background: #bda27f;
    pointer-events: none;
}
</style>
