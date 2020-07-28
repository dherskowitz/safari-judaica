<template>
    <Layout>
        {{$page.product.id}}
        <div class="bg-white rounded-lg shadow-lg mt-10 md:mt-20 flex">
            <div class="w-1/2 mr-10 flex flex-col justify-between border-capeHoney-alt border-r-4">
                <div class="mainProductImage">
                    <g-image :src="mainImage" :alt="$page.product.name"></g-image>
                </div>
                <div class="flex flex-wrap">
                    <g-image
                        :src="$page.product.primaryImage[0].thumbnails.large.url"
                        :alt="$page.product.name"
                        class="w-1/3 cursor-pointer border-capeHoney-alt border-t-4 border-r-4"
                        :class="{'active-image': mainImageID == $page.product.primaryImage[0].id}"
                        @click="changeMainImage($page.product.primaryImage[0])"
                    ></g-image>
                    <g-image
                        v-for="img in $page.product.additionalImages"
                        :src="img.thumbnails.large.url"
                        :key="img.id"
                        class="w-1/3 cursor-pointer border-capeHoney-alt border-t-4 border-r-4"
                        :class="{'active-image': mainImageID == img.id}"
                        @click="changeMainImage(img)"
                    ></g-image>
                </div>
            </div>
            <div class="w-1/2 pt-4 pr-4 pb-4 leading-loose">
                <h1 class="text-3xl">{{ $page.product.name }}</h1>
                <p
                    class="py-2 italic text-xl text-grey-600 font-semibold"
                >${{ $page.product.priceDollars.toFixed(2) }}</p>
                <p>
                    Category:
                    <a
                        :href="'/shop/category/'+ category"
                    >{{ $page.product.categoryName[0] }}</a>
                </p>
                <p>{{ $page.product.stockStatus }}</p>
                <p>{{ $page.product.summary }}</p>
                <p>Measures 10"w x 20"h</p>
                <p>Weights 0.5 lbs</p>
                <p>Material is Leather and Fur</p>
                <div>
                    Share:
                    <span class="mr-2">Facebook</span>
                    <span class="mr-2">Instagram</span>
                    <span class="mr-2">WhatsApp</span>
                </div>

                <button
                    class="bg-outerSpace p-2 mt-10 text-white rounded-lg shadow-lg"
                    @click="toggleForm"
                >Inquire about this product!</button>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg mt-10 md:mt-20 p-10">
            <h2 class="text-3xl mb-2 border-b-4 border-capeHoney-alt">Product Description</h2>
            <p>{{ $page.product.description }}</p>
        </div>
        <InquiryForm
            v-bind:showForm="showForm"
            @hideForm="showForm = false"
            :productName="$page.product.name"
        />
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  product(id: $id) {
    id
    name
    sku
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
}
</page-query>

<script>
import InquiryForm from "~/components/InquiryForm";

export default {
    data() {
        return {
            showForm: false,
            mainImage: "",
            mainImageID: "",
            category: "",
        };
    },
    metaInfo: {
        title: "Product Page",
        meta: [{ name: "description", content: "Shop Safari Judaica" }],
    },
    components: {
        InquiryForm,
    },
    mounted() {
        this.mainImage = this.$page.product.primaryImage[0].thumbnails.large.url;
        this.mainImageID = this.$page.product.primaryImage[0].id;
        this.category = this.$page.product.categoryName[0]
            .toLowerCase()
            .replace(" ", "-");
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
            let vm = this;
            let imgContainer = document.querySelector(".mainProductImage");
            imgContainer.classList.add("fade");
            this.mainImage = newImage.thumbnails.large.url;
            this.mainImageID = newImage.id;
            setTimeout(function () {
                imgContainer.classList.remove("fade");
            }, 500);
        },
    },
};
</script>

<style>
.mainProductImage {
    max-height: 380px;
    overflow: hidden;
}
.mainProductImage.fade {
    animation-name: fade;
    animation-duration: 0.8s;
}
.active-image {
    border-top: 4px solid rebeccapurple;
    opacity: 65%;
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
