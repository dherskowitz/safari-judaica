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
                <div
                    class="flex flex-col md:flex-row mt-4 justify-center md:justify-start items-center"
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
                <div class="mt-5 flex flex-wrap justify-center lg:justify-between">
                    <span class="mt-2 lg:mt-0">
                        <p class="block mb-2">Like Us On:</p>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="mr-2 mb-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                        >Facebook</a>
                    </span>
                    <span class="mt-2 lg:mt-0">
                        <p class="block mb-2">Follow Us On:</p>
                        <a
                            href="https://www.instagram.com/safari.rosy/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="mr-2 mb-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                        >Instagram</a>
                    </span>
                    <span class="mt-2 lg:mt-0">
                        <p class="block mb-2">Share This On:</p>
                        <a
                            :href="'https://wa.me/'+whatsappShare"
                            data-action="share/whatsapp/share"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="hidden md:inline mr-2 mb-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                        >WhatsApp</a>
                        <a
                            :href="'whatsapp://send'+whatsappShare"
                            data-action="share/whatsapp/share"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="inline md:hidden mr-2 mb-2 border-gray-400 hover:bg-capeHoney-lighter cursor-pointer border-2 py-3 px-6"
                        >WhatsApp</a>
                    </span>
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
        <div class="mt-10 md:mt-20" v-if="productReviews.length > 0">
            <h2 class="text-3xl mb-2 border-b-4 border-capeHoney-alt">Product Reviews</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <span
                    class="mb-2 w-full sm:max-w-xs lg:max-w-2xl"
                    v-for="rev in productReviews"
                    :key="rev.id"
                >
                    <blockquote
                        class="relative p-4 text-xl italic border-l-4 bg-white shadow-lg rounded-lg text-neutral-600 border-neutral-500 quote"
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
            <h2 class="text-3xl mb-2 border-b-4 border-capeHoney-alt">Submit A Review</h2>
            <div class="bg-white rounded-lg shadow-lg mt-10 p-10">
                <ProductReviewForm />
            </div>
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
        return {
            title: this.$page.product.name,
            meta: [
                { name: "description", content: "Shop Safari Judaica" },
                {
                    property: "og:title",
                    content: this.$page.product.name,
                },
                {
                    property: "og:description",
                    cotent: this.$page.product.summary,
                },
                {
                    property: "og:image",
                    content:
                        this.$page.product.primaryImage[0].thumbnails.large
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
