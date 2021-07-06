<template>
    <div class="w-64 bg-white rounded-lg shadow-lg">
        <p class="pt-4 mx-2 mb-6 font-semibold border-b-2 border-gray-700">{{ title }}</p>

        <g-link
            class="block w-full px-4 py-2 category-item"
            v-for="edge in menuItems"
            :key="edge.node.id"
            :to="edge.node.path"
            exact
        >{{ edge.node.name }}</g-link>
    </div>
</template>

<script>
export default {
    name: "ShopMenu",
    props:  {
        title: String,
        menuItems: Array
    }
};
</script>
