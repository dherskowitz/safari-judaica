<template>
    <Layout>
        <section class="mt-10 md:mt-20 about-banner relative flex items-center overflow-y-hidden">
            <div class="absolute">
                <p class="text-2xl ml-16">Putting the Ju in Judaica</p>
            </div>
            <g-image
                class="object-cover pointer-events-none"
                src="~/assets/img/safari-judaica-about.jpg"
                width="1200"
            ></g-image>
        </section>
    </Layout>
</template>

<script>
export default {};
</script>

<style>
.about-banner {
    max-height: 500px;
    background-color: #fff1ca;
}
</style>
