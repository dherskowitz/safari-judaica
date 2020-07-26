<template>
    <Layout>
        <div>
            <h1 v-html="$page.product.name" />
            <p>{{ $page.product.priceDollars }}</p>
            <p>{{ $page.product.category }}</p>
            <p>{{ $page.product.stockStatus }}</p>
            <p>{{ $page.product.description }}</p>
            <img
                :src="$page.product.primaryImage[0].thumbnails.large.url"
                :alt="$page.product.name"
            />
        </div>
    </Layout>
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
