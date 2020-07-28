<template>
    <Layout>
        <div>
            <h1>{{ $page.product.name }}</h1>
            <p>{{ $page.product.priceDollars }}</p>
            <p>{{ $page.product.categoryName[0] }}</p>
            <p>{{ $page.product.stockStatus }}</p>
            <p>{{ $page.product.description }}</p>
            <img
                :src="$page.product.primaryImage[0].thumbnails.large.url"
                :alt="$page.product.name"
            />
            <button
                class="bg-outerSpace p-2 text-white"
                @click="toggleForm"
            >Inquire about this product!</button>
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
        };
    },
    metaInfo: {
        title: "Product Page",
        meta: [{ name: "description", content: "Shop Safari Judaica" }],
    },
    components: {
        InquiryForm,
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
    },
};
</script>

