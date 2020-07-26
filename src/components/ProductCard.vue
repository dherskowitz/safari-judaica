<template>
    <div
        class="my-4 md:m-2 md:mb-10 md:my-0 bg-gray-800 shadow-lg relative flex justify-between flex-col rounded-lg max-w-2xl md:max-w-none lg:max-w-xs"
    >
        <g-image
            class="rounded-t-lg"
            v-if="productData.node.primaryImage[0]"
            :src="productData.node.primaryImage[0].thumbnails.large.url"
        />
        <div class="px-8 pt-8 text-gray-300">
            <div class="text-2xl text-center">{{ productData.node.name }}</div>
            <div
                class="text-xl text-center w-16 mx-auto rounded-lg mt-2 bg-capeHoney-alt text-black"
            >${{ productData.node.priceDollars }}</div>
            <div class="text-center mt-4">{{ productData.node.summary }}</div>
            <span
                class="absolute top-0 right-0 m-2 rounded-md px-2 py-1 text-white"
                :class="{'bg-stock': productData.node.stockStatus == 'In Stock', 'bg-stock-low': productData.node.stockStatus == 'Limited Stock', 'bg-stock-out': productData.node.stockStatus == 'Out Of Stock'}"
            >{{ productData.node.stockStatus }}</span>
        </div>
        <g-link
            :to="productData.node.path"
            class="bg-capeHoney-alt rounded-lg m-5 p-2 text-center text-xl"
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
