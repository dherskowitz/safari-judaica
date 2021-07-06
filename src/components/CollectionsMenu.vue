<template>
    <div class="bg-white rounded-lg shadow-lg md:mr-8">
        <p class="pt-4 mx-2 mb-6 font-semibold border-b-2 border-gray-700">Shop by Collection</p>
        <g-link
            class="block w-full px-4 py-2 category-item"
            v-for="edge in $static.collections.edges"
            :key="edge.node.id"
            :to="edge.node.path"
            exact
        >{{ edge.node.name }}</g-link>
    </div>
</template>

<script>
export default {
    name: "CollectionsMenu",
};
</script>

<static-query>
query {
  collections: allCollection(sortBy: "Name", order: ASC) {
    edges {
      node {
        id,
        name,
        description,
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
