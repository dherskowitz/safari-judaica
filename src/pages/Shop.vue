<template>
    <Layout>
        <section class="min-h-screen md:flex md:items-start md:max-w-full">
            <div class="mt-10 lg:mt-20 flex-none w-full md:max-w-xs">
                <CategoriesMenu />
            </div>
            <div class="flex-1 w-full">
                <NewProducts />
                <PopularProducts colCount="3" />
            </div>
        </section>
    </Layout>
</template>

<script>
import CategoriesMenu from "~/components/CategoriesMenu";
import PopularProducts from "~/components/PopularProducts";
import NewProducts from "~/components/NewProducts";
export default {
    metaInfo: {
        title: "Shop",
        meta: [{ name: "description", content: "Shop Safari Judaica" }],
    },
    components: {
        CategoriesMenu,
        PopularProducts,
        NewProducts,
    },
};
</script>

<style>
</style>
