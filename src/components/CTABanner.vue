<template>
    <section
        class="relative flex items-center px-16 mt-10 bg-center bg-no-repeat bg-cover shadow-lg opacity-75 cta-banner lg:mt-20 md:rounded-lg"
        style="background-image: url(/images/safari-judaica-cta-banner.jpg)"
    >
        <div>
            <p class="max-w-sm mb-16 text-3xl font-semibold">Shop before he’s really mad!</p>
            <g-link
                class="px-16 py-5 text-3xl text-white rounded-lg shadow-lg bg-outerSpace-default hover:bg-gray-800"
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
