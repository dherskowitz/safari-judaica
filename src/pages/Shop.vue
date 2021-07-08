<template>
    <Shop>
        <section class="relative flex">
            <div class="flex-1 w-full">
                <NewProducts />
                <PopularProducts colCount="3" />
            </div>
        </section>
    </Shop>
</template>

<script>
import Shop from '~/layouts/Shop.vue'
import PopularProducts from "~/components/PopularProducts";
import NewProducts from "~/components/NewProducts";
export default {
    metaInfo: {
        title: "Shop",
        meta: [{ name: "description", content: "Shop Safari Judaica" }],
    },
    components: {
        Shop,
        PopularProducts,
        NewProducts,
    },
};
</script>

<style>
</style>
