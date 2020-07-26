<template>
    <section class="mt-10 lg:mt-20">
        <h1 class="text-3xl font-semibold border-gray-600 border-b-4 mb-8">Popular Products</h1>
        <div class="grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div
                class="m-2 bg-gray-800 shadow-lg relative flex justify-between flex-col rounded-lg"
                v-for="edge in $static.products.edges"
                :key="edge.node.id"
            >
                <g-image
                    v-if="edge.node.primaryImage[0]"
                    :src="edge.node.primaryImage[0].thumbnails.large.url"
                />
                <div class="px-8 pt-8 text-gray-300">
                    <div class="text-2xl text-center">{{ edge.node.name }}</div>
                    <div class="text-lg text-center mt-2">${{ edge.node.priceDollars }}</div>
                    <div class="text-center mt-4">{{ edge.node.summary }}</div>
                    <span
                        class="absolute top-0 right-0 bg-orange-300 m-2 rounded-md px-2 py-1 text-black"
                    >{{ edge.node.stockStatus }}</span>
                    <br />
                </div>
                <g-link
                    :to="edge.node.path"
                    class="text-gray-300 bg-outerSpace rounded-lg m-5 p-2 text-center text-xl"
                >See Details</g-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PopularProducts",
};
</script>

<static-query>
query {
  products: allProduct {
    edges {
      node {
        id
        name
        path
        priceDollars
        summary
        stockStatus
        primaryImage {
          thumbnails {
            large {
              url
            }
          }
        }
      }
    }
  }
}
</static-query>

<style>
</style>
