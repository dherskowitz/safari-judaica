<template>
    <Layout>
        <div class="mt-10">
            <g-link to="/shop" class="mr-1 hover:underline">Shop</g-link>/
            <span class="text-capeHoney-alt">{{ titleCase($route.params.Name) }}</span>
        </div>
        <section class="min-h-screen md:flex md:items-start md:max-w-full mt-10 lg:mt-20">
            <div class="flex-none w-full md:max-w-xs">
                <CategoriesMenu />
            </div>
            <div
                v-if="$page.products.edges && $page.products.edges.length == 0"
                class="text-2xl text-center w-full"
            >No products in this category yet!</div>
            <div class="flex-1 md:flex flex-col lg:flex-row w-full">
                <ProductCard
                    v-for="edge in $page.products.edges"
                    :key="edge.node.id"
                    :productData="edge"
                />
            </div>
        </section>
    </Layout>
</template>

<page-query>
query ($id: String!) {
  products: allProduct(filter: {category: {contains: [$id]}}) {
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
</page-query>

<script>
import CategoriesMenu from "~/components/CategoriesMenu";
import ProductCard from "~/components/ProductCard";

export default {
    components: {
        CategoriesMenu,
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
