<template>
    <section class="mt-10 lg:mt-20">
        <h1 class="text-3xl font-semibold border-gray-600 border-b-4 mb-8">Popular Products</h1>
        <div
            class="grid grid-flow-row sm:grid-cols-1 md:grid-cols-1 gap-2"
            :class="{'lg:grid-cols-3 xl:grid-cols-4': colCount == 4, 'lg:grid-cols-2 xl:grid-cols-3': colCount == 3}"
        >
            <ProductCard
                v-for="edge in $static.products.edges"
                :key="edge.node.id"
                :productData="edge"
            />
        </div>
    </section>
</template>

<script>
import ProductCard from "~/components/ProductCard";
export default {
    name: "PopularProducts",
    props: ["colCount"],
    components: {
        ProductCard,
    },
};
</script>

<static-query>
query {
  products: allProduct(filter: {popularProduct: {eq: true}}) {
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
