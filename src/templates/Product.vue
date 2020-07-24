<template>
    <div>
        <h1 v-html="$page.product.name" />
        <pre>
          {{$page.product.additionalImages}}
        </pre>
        <img :src="$page.product.primaryImage[0].thumbnails.large.url" :alt="$page.product.name" />
    </div>
</template>

<page-query>
query ($id: ID!) {
  product(id: $id) {
    name
    sku
    priceDollars
    category
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
