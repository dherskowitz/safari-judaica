<template>
    <Layout>
        <HomeBanner />
        <CategoriesList />
        <CTABanner />
        <PopularProducts />
    </Layout>
</template>

<script>
import CategoriesList from "~/components/CategoriesList";
import HomeBanner from "~/components/HomeBanner";
import CTABanner from "~/components/CTABanner";
import PopularProducts from "~/components/PopularProducts";

export default {
    metaInfo: {
        title: "Safari Judaica",
    },
    components: {
        CategoriesList,
        HomeBanner,
        CTABanner,
        PopularProducts,
    },
};
</script>

<style>
</style>
