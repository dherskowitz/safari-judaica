<template>
    <section
        class="cta-banner relative bg-cover bg-no-repeat bg-center mt-10 lg:mt-20 px-16 md:rounded-lg opacity-75 flex items-center shadow-lg"
        style="background-image: url(/images/safari-judaica-cta-banner.jpg)"
    >
        <div>
            <p class="font-semibold text-3xl max-w-sm mb-16">Shop before he’s really mad!</p>
            <g-link
                class="bg-outerSpace py-5 px-16 text-3xl text-white rounded-lg shadow-lg hover:bg-gray-800"
                to="/shop/"
            >SHOP</g-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "CTABanner",
};
</script>

<style>
.cta-banner {
    height: 600px;
}
.cta-banner::after {
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
