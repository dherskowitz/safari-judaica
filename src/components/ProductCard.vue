<template>
    <div
        class="my-4 md:m-2 md:mb-10 md:my-0 bg-gray-800 shadow-lg relative flex justify-between flex-col rounded-lg max-w-2xl md:max-w-none lg:max-w-xs"
    >
        <g-image
            v-if="productData.node.primaryImage[0]"
            :src="productData.node.primaryImage[0].thumbnails.large.url"
        />
        <div class="px-8 pt-8 text-gray-300">
            <div class="text-2xl text-center">{{ productData.node.name }}</div>
            <div class="text-lg text-center mt-2">${{ productData.node.priceDollars }}</div>
            <div class="text-center mt-4">{{ productData.node.summary }}</div>
            <span
                class="absolute top-0 right-0 bg-orange-300 m-2 rounded-md px-2 py-1 text-black"
            >{{ productData.node.stockStatus }}</span>
            <br />
        </div>
        <g-link
            :to="productData.node.path"
            class="text-gray-300 bg-outerSpace rounded-lg m-5 p-2 text-center text-xl"
        >See Details</g-link>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["productData"],
};
</script>

<style>
</style>
