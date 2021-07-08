<template>
    <g-link
        :to="productData.node.path"
        class="relative flex-1 w-full mb-2 overflow-hidden bg-gray-800 rounded-lg shadow-lg sm:w-auto sm:mx-2">
        <span class="flex items-center justify-center bg-white">
            <g-imageZ
                class="max-w-xs rounded-t-lg"
                :alt="productData.node.name "
                v-if="productData.node.primaryImage[0]"
                :src="productData.node.primaryImage[0].thumbnails.large.url"
            />
        </span>
        <div class="px-8 pt-8 text-gray-300">
            <div class="text-2xl text-center">{{ productData.node.name }}</div>
            <div
                v-if="productData.node.priceDollars"
                class="w-16 mx-auto mt-2 text-xl text-center text-black rounded-lg bg-capeHoney-alt"
            >${{ productData.node.priceDollars }}</div>
            <div class="mt-4 text-center">{{ productData.node.summary }}</div>
            <span
                class="absolute top-0 right-0 px-2 py-1 m-2 text-white rounded-md"
                :class="{'bg-stock': productData.node.stockStatus == 'In Stock', 'bg-stock-low': productData.node.stockStatus == 'Limited Stock', 'bg-stock-out': productData.node.stockStatus == 'Out Of Stock'}"
            >{{ productData.node.stockStatus }}</span>
        </div>
        <g-link
            :to="productData.node.path"
            class="flex justify-center p-2 m-5 text-xl rounded-lg bg-capeHoney-alt"
        >See Details</g-link>
    </g-link>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["productData"],
};
</script>

<style>
</style>
