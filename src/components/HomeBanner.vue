<template>
    <section
        class="home-banner relative bg-cover bg-no-repeat bg-center mt-10 lg:mt-20 px-16 md:rounded-lg opacity-75 flex items-center shadow-lg"
        style="background-image: url(/images/safari-judaica-banner.jpg)"
    >
        <div>
            <g-image src="~/assets/img/Safari_Juciaca_Logo-1024x864.png" width="200" />
            <p
                class="font-semibold text-3xl max-w-lg my-8"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <g-link
                class="bg-outerSpace py-5 px-16 text-xl text-white rounded-lg shadow-lg hover:bg-gray-800 uppercase"
                to="/shop/"
            >see the products</g-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeBanner",
};
</script>

<style>
.home-banner {
    height: 600px;
}
.home-banner::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
</style>
