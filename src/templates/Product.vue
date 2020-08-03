<template>
    <Layout>
        <div class="mt-10">
            <g-link to="/shop" class="mr-1 hover:underline">Shop</g-link>/
            <g-link
                :to="categoryLink"
                class="mr-1 hover:underline"
            >{{ $page.product.categoryName[0] }}</g-link>/
            <span class="text-capeHoney-alt">{{ $page.product.name }}</span>
        </div>
        <div class="mt-10 md:bg-white flex flex-col md:flex-row">
            <div
                class="bg-white rounded-lg md:rounded-none shadow-lg md:shadow-none w-full md:w-1/2 md:mr-10 flex flex-col justify-between border-capeHoney-alt md:border-r-4"
            >
                <div class="mainProductImage">
                    <g-image
                        :src="mainImage.url"
                        :alt="$page.product.name"
                        class="max-h-full mx-auto w-full object-cover"
                    ></g-image>
                </div>
                <div v-if="$page.product.additionalImages.length > 0" class="flex flex-wrap">
                    <g-image
                        :src="$page.product.primaryImage[0].thumbnails.large.url"
                        :alt="$page.product.name"
                        class="w-1/3 cursor-pointer border-capeHoney-alt border-t-4 border-r-4"
                        :class="{'active-image': mainImage.id == $page.product.primaryImage[0].id}"
                        @click="changeMainImage($page.product.primaryImage[0])"
                    ></g-image>
                    <g-image
                        v-for="img in $page.product.additionalImages"
                        :src="img.thumbnails.large.url"
                        :alt="$page.product.name"
                        :key="img.id"
                        class="w-1/3 cursor-pointer border-capeHoney-alt border-t-4 border-r-4"
                        :class="{'active-image': mainImage.id == img.id}"
                        @click="changeMainImage(img)"
                    ></g-image>
                </div>
            </div>
            <div
                class="bg-white rounded-lg md:rounded-none shadow-lg md:shadow-none w-full md:w-1/2 md:mr-10 text-center md:text-left mt-10 md:mt-0 pt-4 pb-4 leading-loose"
            >
                <h1 class="text-3xl mb-2 border-b-4 border-capeHoney-alt">{{ $page.product.name }}</h1>
                <p
                    class="py-2 italic text-xl text-grey-600 font-semibold"
                >${{ $page.product.priceDollars.toFixed(2) }}</p>
                <p>{{ $page.product.stockStatus }}</p>
                <p>{{ $page.product.summary }}</p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Category</span>&nbsp;&nbsp;
                    <span v-for="catName, i in $page.product.categoryName">
                        <span v-if="i > 0">/&nbsp;&nbsp;</span>
                        <a
                            class="text-capeHoney-alt underline text-left"
                            :href="'/shop/'+catName.replace(' ', '-').toLowerCase()"
                        >{{ catName }}</a>&nbsp;&nbsp;
                    </span>
                </p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Dimensions</span>&nbsp;&nbsp; 10"w x 20"h
                </p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Weight</span>&nbsp;&nbsp; 0.5 lbs
                </p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Materials</span>&nbsp;&nbsp; Leather and Fur
                </p>
                <div class="mt-5">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        class="mr-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                    >Facebook</a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        class="mr-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                    >Instagram</a>
                    <a
                        href="whatsapp://send"
                        data-text="Text you want to Share"
                        data-href="URL you want to share"
                        data-action="share/whatsapp/share"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        class="mr-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                    >WhatsApp</a>
                </div>

                <button
                    class="bg-outerSpace p-2 px-4 mt-10 text-white rounded-lg shadow-lg md:w-full uppercase text-base md:text-lg"
                    @click="toggleForm"
                >Inquire about this product!</button>
            </div>
        </div>
        <div class="mt-10 md:mt-20">
            <h2 class="text-3xl mb-2 border-b-4 border-capeHoney-alt">Product Description</h2>
            <p class="bg-white rounded-lg shadow-lg mt-10 p-10">{{ $page.product.description }}</p>
        </div>
        <div class="mt-10 md:mt-20" v-if="relatedProducts.length > 0">
            <h2 class="text-3xl mb-8 border-b-4 border-capeHoney-alt">Similar Products</h2>
            <ProductCard v-for="edge in relatedProducts" :key="edge.node.id" :productData="edge" />
        </div>
        <ProductInquiryForm
            v-bind:showForm="showForm"
            @hideForm="showForm = false"
            :productName="$page.product.name"
        />
    </Layout>
</template>

<page-query>
query ($id: ID!, $Category__0: String!) {
    product: product(id: $id) {
        id
        name
        sku
        path
        priceDollars
        category
        categoryName
        stockStatus
        newProduct
        summary
        description
        primaryImage {
        id
        thumbnails {
            large {
            url
            }
            full {
            url
            }
        }
        }
        additionalImages {
        id
        thumbnails {
            large {
            url
            }
            full {
            url
            }
        }
        }
    }
    relatedProducts: allProduct(filter: {category: {contains: [$Category__0]}}) {
        edges {
            node {
                id
                name
                path
                priceDollars
                summary
                stockStatus
                primaryImage {
                    thumbnails {
                        large {
                            url
                        }
                    }
                }
            }
        }
    }
}
</page-query>

<script>
import ProductInquiryForm from "~/components/ProductInquiryForm";
import ProductCard from "~/components/ProductCard";

export default {
    data() {
        return {
            page: "",
            showForm: false,
            mainImage: {
                id: "",
                url: "",
            },
            productID: "",
            categoryLink: "",
            relatedProducts: [],
        };
    },
    metaInfo: {
        title: "Product Page",
        meta: [{ name: "description", content: "Shop Safari Judaica" }],
    },
    components: {
        ProductInquiryForm,
        ProductCard,
    },
    beforeUpdate() {
        this.relatedProducts = this.$page.relatedProducts.edges.filter(
            (item) => {
                return item.node.id !== this.$page.product.id;
            }
        );
    },
    updated() {
        if (this.page !== this.$route.params.Slug) {
            this.mainImage.url = this.$page.product.primaryImage[0].thumbnails.large.url;
            this.mainImage.id = this.$page.product.primaryImage[0].id;
        }
        this.page = this.$route.params.Slug;
    },
    mounted() {
        this.mainImage.url = this.$page.product.primaryImage[0].thumbnails.large.url;
        this.mainImage.id = this.$page.product.primaryImage[0].id;
        let catSlug = this.$page.product.categoryName[0]
            .toLowerCase()
            .replace(" ", "-");
        this.categoryLink = `/shop/${catSlug}`;
    },
    methods: {
        toggleForm() {
            this.showForm = !this.showForm;
            document
                .querySelector("body")
                .classList.add(
                    "flex",
                    "items-center",
                    "justify-center",
                    "h-screen",
                    "overflow-y-hidden"
                );
        },
        changeMainImage(newImage) {
            let imgContainer = document.querySelector(".mainProductImage");
            imgContainer.classList.add("fade");
            this.mainImage.url = newImage.thumbnails.large.url;
            this.mainImage.id = newImage.id;
            setTimeout(function () {
                imgContainer.classList.remove("fade");
            }, 500);
            console.log("change");
        },
    },
};
</script>

<style>
.mainProductImage {
    height: 300px;
    overflow: hidden;
}
@media (min-width: 600px) {
    .mainProductImage {
        height: 400px;
        overflow: hidden;
    }
}
@media (min-width: 1200px) {
    .mainProductImage {
        height: 440px;
        overflow: hidden;
    }
}
.mainProductImage.fade {
    animation-name: fade;
    animation-duration: 0.8s;
}
.active-image {
    border-top: 4px solid rebeccapurple;
    opacity: 0.65;
    pointer-events: none;
}

@keyframes fade {
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
