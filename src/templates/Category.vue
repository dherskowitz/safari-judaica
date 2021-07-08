<template>
  <Shop>
    <section class="md:flex md:items-start md:max-w-full">
      <div
        v-if="$page.products.edges && $page.products.edges.length == 0"
        class="w-full text-2xl text-center"
      >
        No products in this category yet!
      </div>
      <div class="grid grid-cols-3 space-x-4">
        <ProductCard
          v-for="edge in $page.products.edges"
          :key="edge.node.id"
          :productData="edge"
        />
      </div>
    </section>
  </Shop>
</template>

<page-query>
query ($id: String!) {
  products: allProduct(filter: { category: { contains: [$id] } }) {
    edges {
      node {
        id
        name
        path
        priceDollars
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
</page-query>

<script>
import Shop from '~/layouts/Shop.vue'
import ProductCard from "~/components/ProductCard";

export default {
  components: {
    Shop,
    ProductCard,
  },
  metaInfo() {
    return {
      title: `Shop ${this.titleCase(this.$route.params.Name)}`,
      meta: [
        {
          name: "description",
          content: `Shop Safari Judaica ${this.titleCase(
            this.$route.params.Name
          )}`,
        },
      ],
    };
  },
  methods: {
    titleCase(str) {
      let title = str.replace("-", " ").split(" ");
      let titleCased = title.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      });
      return titleCased.join(" ");
    },
  },
};
</script>
