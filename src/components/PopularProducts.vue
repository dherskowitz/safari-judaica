<template>
    <section
        class="mt-10 lg:mt-20 grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2"
    >
        <div
            class="m-2 bg-gray-800 shadow-lg relative flex justify-between flex-col"
            v-for="edge in $static.products.edges"
            :key="edge.node.id"
        >
            <g-image
                v-if="edge.node.primaryImage[0]"
                :src="edge.node.primaryImage[0].thumbnails.large.url"
                class="h-48"
                width="300"
            />
            <div class="p-8">
                {{ edge.node.name }}
                <br />
                {{ edge.node.priceDollars }}
                <br />
                {{ edge.node.summary }}
                <br />
                <span
                    class="absolute top-0 right-0 bg-orange-300 m-2 rounded-md px-2 py-1"
                >{{ edge.node.stockStatus }}</span>
                <br />
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
