<template>
    <Layout>
        <!-- <div class="mt-10">
            <g-link to="/shop" class="mr-1 hover:underline">Shop</g-link>/
            <g-link
                :to="categoryLink"
                class="mr-1 hover:underline"
            >{{ $page.product.categoryName[0] }}</g-link>/
            <span class="text-capeHoney-alt">{{ $page.product.name }}</span>
        </div> -->
        <div class="flex flex-col-reverse lg:mt-10 lg:bg-white lg:flex-row">
            <div
                class="flex flex-col justify-between w-full bg-white rounded-lg shadow-lg lg:rounded-none lg:shadow-none lg:w-1/2 lg:mr-10 border-capeHoney-alt lg:border-r-4"
            >
                <div class="mainProductImage">
                    <g-image
                        :src="mainImage.url"
                        :alt="$page.product.name"
                        class="object-contain w-full max-h-full mx-auto"
                    ></g-image>
                </div>
                <div v-if="$page.product.additionalImages.length > 0" class="flex flex-wrap">
                    <g-image
                        :src="$page.product.primaryImage[0].thumbnails.large.url"
                        :alt="$page.product.name"
                        class="w-1/3 border-t-4 border-r-4 cursor-pointer border-capeHoney-alt"
                        :class="{'active-image': mainImage.id == $page.product.primaryImage[0].id}"
                        @click="changeMainImage($page.product.primaryImage[0])"
                    ></g-image>
                    <g-image
                        v-for="img in $page.product.additionalImages"
                        :src="img.thumbnails.large.url"
                        :alt="$page.product.name"
                        :key="img.id"
                        class="w-1/3 border-t-4 border-r-4 cursor-pointer border-capeHoney-alt"
                        :class="{'active-image': mainImage.id == img.id}"
                        @click="changeMainImage(img)"
                    ></g-image>
                </div>
            </div>
            <div
                class="w-full pt-4 pb-4 mt-10 mb-10 leading-loose text-center bg-white rounded-lg shadow-lg lg:mb-0 lg:rounded-none lg:shadow-none lg:w-1/2 lg:mr-10 lg:text-left lg:mt-0"
            >
                <h1 class="mb-2 text-3xl border-b-4 border-capeHoney-alt">{{ $page.product.name }}</h1>
                <div
                    class="flex flex-col items-center justify-center mt-4 md:flex-row md:justify-start"
                    v-if="productReviews.length > 0"
                >
                    <span>
                        <Star
                            v-for="i in 5"
                            :width="24"
                            starClass="productStar"
                            class="inline"
                            :key="i+'this.$page.product.id'"
                        />
                    </span>
                    <p class="text-sm md:ml-4">Based on {{ productReviews.length }} reviews.</p>
                </div>
                <p
                    class="py-2 text-xl italic font-semibold text-grey-600"
                >{{ $page.product.priceDollars ? "$"+$page.product.priceDollars.toFixed(2) : "" }}</p>
                <p>{{ $page.product.stockStatus }}</p>
                <p>{{ $page.product.summary }}</p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Category</span>&nbsp;&nbsp;
                    <span v-for="catName, i in $page.product.categoryName">
                        <span v-if="i > 0">/&nbsp;&nbsp;</span>
                        <a
                            class="text-left underline text-capeHoney-alt"
                            :href="'/shop/category/'+catName.replace(/ /g, '-').toLowerCase()"
                        >{{ catName }}</a>&nbsp;&nbsp;
                    </span>
                </p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Dimensions</span>&nbsp;&nbsp; lorem ipsum
                </p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Weight</span>&nbsp;&nbsp; lorem lbs
                </p>
                <p>
                    <span class="text-lg font-bold text-gray-700">- Materials</span>&nbsp;&nbsp; lorem ipsum
                </p>
                <div class="flex flex-wrap justify-center mt-5 lg:justify-between">
                    <span class="mt-2 lg:mt-0">
                        <p class="block mb-2">Like Us On:</p>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="px-6 py-3 mb-2 mr-2 border-2 border-gray-400 cursor-pointer hover:bg-capeHoney-lighter"
                        >Facebook</a>
                    </span>
                    <span class="mt-2 lg:mt-0">
                        <p class="block mb-2">Follow Us On:</p>
                        <a
                            href="https://www.instagram.com/safari.rosy/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="px-6 py-3 mb-2 mr-2 border-2 border-gray-400 cursor-pointer hover:bg-capeHoney-lighter"
                        >Instagram</a>
                    </span>
                    <span class="mt-2 lg:mt-0">
                        <p class="block mb-2">Share This On:</p>
                        <a
                            :href="'https://wa.me/'+whatsappShare"
                            data-action="share/whatsapp/share"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="hidden px-6 py-3 mb-2 mr-2 border-2 border-gray-400 cursor-pointer md:inline hover:bg-capeHoney-lighter"
                        >WhatsApp</a>
                        <a
                            :href="'whatsapp://send'+whatsappShare"
                            data-action="share/whatsapp/share"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="inline px-6 py-3 mb-2 mr-2 border-2 border-gray-400 cursor-pointer md:hidden hover:bg-capeHoney-lighter"
                        >WhatsApp</a>
                    </span>
                </div>

                <button
                    class="p-2 px-4 mt-10 text-base text-white uppercase rounded-lg shadow-lg bg-outerSpace-default md:w-full md:text-lg md:max-w-3/4 lg:max-w-full"
                    @click="toggleForm"
                >Inquire about this product!</button>
            </div>
        </div>
        <div class="mt-10 md:mt-20">
            <h2 class="mb-2 text-3xl border-b-4 border-capeHoney-alt">Product Description</h2>
            <p class="p-10 mt-10 bg-white rounded-lg shadow-lg">{{ $page.product.description }}</p>
        </div>
        <div class="mt-10 md:mt-20" v-if="productReviews.length > 0">
            <h2 class="mb-2 text-3xl border-b-4 border-capeHoney-alt">Product Reviews</h2>
            <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <span
                    class="w-full mb-2 sm:max-w-xs lg:max-w-2xl"
                    v-for="rev in productReviews"
                    :key="rev.id"
                >
                    <blockquote
                        class="relative p-4 text-xl italic bg-white border-l-4 rounded-lg shadow-lg text-neutral-600 border-neutral-500 quote"
                    >
                        <p class="mb-4">"{{ rev.comment }}"</p>
                        <Star
                            v-for="i in rev.rating"
                            :width="24"
                            fill="gold"
                            stroke="gold"
                            starClass="productStar"
                            :key="rev.id"
                            class="inline"
                        />
                        <cite class="flex items-center">
                            <div class="flex flex-col items-start">
                                <span
                                    class="mb-1 text-sm italic font-bold"
                                >{{ rev.remainAnonymous ? "Anonymous" : rev.name }}</span>
                            </div>
                        </cite>
                    </blockquote>
                </span>
            </div>
        </div>
        <div class="mt-10 md:mt-20">
            <h2 class="mb-2 text-3xl border-b-4 border-capeHoney-alt">Submit A Review</h2>
            <div class="p-10 mt-10 bg-white rounded-lg shadow-lg">
                <ProductReviewForm />
            </div>
        </div>
        <div class="mt-10 md:mt-20" v-if="relatedProducts.length > 0">
            <h2 class="mb-8 text-3xl border-b-4 border-capeHoney-alt">Similar Products</h2>
            <div class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <ProductCard v-for="edge in relatedProducts" :key="edge.node.id" :productData="edge" />
            </div>
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
        path
        priceDollars
        category
        categoryName
        stockStatus
        newProduct
        description
        averageRating
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
        reviews: productReviews(sortBy: "created", order: DESC) {
            id
            name
            status
            rating
            comment
            remainAnonymous
        }
    }
    relatedProducts: allProduct(filter: {category: {contains: [$Category__0]}}, limit: 4) {
        edges {
            node {
                id
                name
                path
                priceDollars
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
import ProductReviewForm from "~/components/ProductReviewForm";
import Star from "~/components/Star";

export default {
    components: {
        ProductInquiryForm,
        ProductCard,
        ProductReviewForm,
        Star,
    },
    data() {
        return {
            page: "",
            showForm: false,
            mainImage: {
                id: "",
                url: "",
            },
            productName: "",
            productID: "",
            categoryLink: "",
            whatsappShare: "",
            relatedProducts: [],
            productReviews: [],
        };
    },
    metaInfo() {
        let vm = this;
        return {
            title: vm.$page.product.name,
            meta: [
                { name: "description", content: "Shop Safari Judaica" },
                {
                    property: "og:title",
                    content: vm.$page.product.name,
                },
                {
                    property: "og:description",
                    cotent: vm.$page.product.summary,
                },
                {
                    property: "og:image",
                    content:
                        vm.$page.product.primaryImage[0].thumbnails.large
                            .url || "",
                },
            ],
        };
    },
    beforeUpdate() {
        this.relatedProducts = this.$page.relatedProducts.edges.filter(
            (item) => item.node.id !== this.$page.product.id
        );
        this.productReviews = this.$page.product.reviews.filter(
            (item) => item.status === "Approved"
        );
        this.setRating();
    },
    updated() {
        if (this.page !== this.$route.params.Slug) {
            this.mainImage.url = this.$page.product.primaryImage[0].thumbnails.large.url;
            this.mainImage.id = this.$page.product.primaryImage[0].id;
            this.whatsappShare = `?text=Check this awesome ${this.$page.product.name} from Safari Judaica%0A%0Ahttps://safari-judaica.vercel.app${this.$page.product.path}`;
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
        setRating() {
            const stars = [...document.querySelectorAll(".productStar")];
            stars.map((star, i) => {
                if (i < Math.round(this.$page.product.averageRating)) {
                    star.style.fill = "gold";
                    star.style.stroke = "gold";
                }
            });
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
