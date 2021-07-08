<template>
    <div class="container mx-auto">
        <Header/>
        <div class="flex mt-12">
            <div class="sticky mr-8 ">
                <ShopMenu title="Shop by Category" :menuItems="this.$static.categories.edges" />
                <ShopMenu title="Shop by Collection" :menuItems="this.$static.collections.edges" />
            </div>
            <slot />
        </div>
        <Footer/>
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
    categories: allCategory(sortBy: "Name", order: ASC) {
        edges {
            node {
                id,
                name,
                path
            }
        }
    }
    collections: allCollection(sortBy: "Name", order: ASC) {
        edges {
            node {
                id,
                name,
                description,
                path
            }
        }
    }
}
</static-query>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ShopMenu from "~/components/ShopMenu";
export default {
    components: {
        Header,
        Footer,
        ShopMenu,
    },
    data() {
        return {
            currentYear: "",
        };
    },
    mounted() {
        this.currentYear = new Date().getFullYear();
    },
    methods: {
        titleCase(str) {
            let title = str.replace("-", " ").split(" ");
            let titleCased = title.map((element) => {
                return element.charAt(0).toUpperCase() + element.slice(1);
            });
            return titleCased.join(" ");
        },
    },
};
</script>

<style>
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
}
</style>
