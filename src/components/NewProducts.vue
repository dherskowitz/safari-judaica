<template>
  <section class="">
    <h1 class="mb-8 text-3xl font-semibold border-b-4 border-gray-600">
      New Products
    </h1>
    <div
      class="grid grid-flow-row gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
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
  name: "NewProducts",
  components: {
    ProductCard,
  },
};
</script>

<static-query>
query {
  products: allProduct(filter: {newProduct: {eq: true}}) {
    edges {
      node {
        id
        name
        priceDollars
        path
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

<style></style>
