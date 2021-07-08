<template>
    <div class="container mx-auto">
        <Header/>
        <button class="flex items-center justify-center w-full py-4 mt-12 bg-white rounded-md shadow-md md:hidden" @click="toggleFilters">
            <span class="mr-4">Shop by Category or Collection</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="transition duration-500 ease-in-out transform" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" :class="{'-rotate-180': showFilters}"><path d="M0 0h24v24H0z" stroke="none"/><circle cx="12" cy="12" r="9"/><path d="M8 12l4 4M12 8v8M16 12l-4 4"/></svg>
        </button>
        <div class="relative flex w-full mt-12 md:justify-center">
            <div
                class="absolute z-50 flex flex-col items-center justify-center w-full -mt-10 text-center transition duration-500 ease-in-out bg-white rounded-md shadow-md md:mr-8 md:sticky md:opacity-100 md:pointer-events-auto md:mt-0 md:bg-transparent md:w-auto md:block md:shadow-none md:rounded-none"
                :class="{'opacity-0 pointer-events-none': !showFilters, 'opacity-100 pointer-events-auto': showFilters}">
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
            showFilters: false
        };
    },
    mounted() {
        this.currentYear = new Date().getFullYear();
    },
    methods: {
        toggleFilters() {
            if (window.innerWidth < 768) {
                this.showFilters = !this.showFilters;
            }
        },
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
