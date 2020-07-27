<template>
    <Layout>
        <section
            class="banner404 mt-10 lg:mt-20 relative rounded-lg flex md:items-center md:justify-end flex-col md:flex-row"
        >
            <div class="md:absolute mr-2 md:mr-20 mb-20 md:mb-0 font-semibold z-10 md:text-white">
                <h1 class="text-4xl md:text-6xl">404 Error</h1>
                <p class="text-xl md:text-3xl">Better get out of here quickly...</p>
                <div class="mt-10">
                    <g-link
                        class="bg-outerSpace mr-4 px-10 py-4 rounded-lg shadow-lg text-white text-xl"
                        to="/"
                    >Home</g-link>
                    <g-link
                        class="bg-outerSpace px-10 py-4 rounded-lg shadow-lg text-white text-xl"
                        to="/shop"
                    >Shop</g-link>
                </div>
            </div>
            <g-image class="pointer-events-none" src="~/assets/img/safari-judaica-404.jpg" />
        </section>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "404 Page Not Found",
        meta: [{ name: "description", content: "404 Page Not Found" }],
    },
};
</script>

<style>
@media (min-width: 768px) {
    .banner404::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
    }
}
</style>
