<template>
    <section class="mt-10 lg:mt-20">
        <h1 class="text-3xl font-semibold border-gray-600 border-b-4 mb-8">Safari Judaica Products</h1>
        <div class="flex flex-wrap justify-between">
            <g-link
                class="category-link w-full md:w-1/5 px-30 py-10 m-2 text-white text-center rounded-lg shadow-lg lg:hover:scale-125 transform transition-scale duration-300 text-2xl flex items-center justify-center"
                v-for="edge, index in $static.categories.edges"
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
}
</static-query>

<script>
export default {
    name: "CategoriesList",
    data() {
        return {
            catColors: [
                "background-color:#9A12B3;",
                "background-color:#67809F;",
                "background-color:#765D69;",
                "background-color:#F22613;",
                "background-color:#4ECDC4;",
                "background-color:#019875;",
                "background-color:#F4B350;",
                "background-color:#2E3131;",
            ],
        };
    },
};
</script>

<style>
</style>
