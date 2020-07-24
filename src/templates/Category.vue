<template>
    <Layout>
        <section>
            <CategoriesList />
            <br />
            <hr class="border-solid border-4 border-gray-600" />
            <br />
            <div v-for="edge in $page.products.edges" :key="edge.node.id">
                <h2>{{ edge.node.name }}</h2>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query ($id: String!) {
  products: allProduct(filter: {category: {contains: [$id]}}) {
    edges {
      node {
        id,
        name
      }
    }
  }
}
</page-query>

<script>
import CategoriesList from "~/components/CategoriesList";

export default {
    components: {
        CategoriesList,
    },
};
</script>
</script>
