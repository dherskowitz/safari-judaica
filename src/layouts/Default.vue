<template>
    <div class="container mx-auto">
        <header
            class="relative flex flex-row bg-capeHoney md:rounded-lg shadow-md justify-between md:pl-2"
        >
            <g-link to="/">
                <g-image src="~/assets/img/Safari_Juciaca_Logo-1935x583.png" width="200" />
            </g-link>
            <Nav />
        </header>
        <slot />
        <footer class="mt-20 bg-outerSpace">
            <div class="p-10">
                <g-image src="~/assets/img/Safari_Juciaca_Logo-1024x864.png" width="200" />
            </div>
            <div
                class="bg-outerSpace-lighter py-3 text-center text-white"
            >Copyright {{ currentYear }} All Rights Reserved SafariJudaica.com</div>
        </footer>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Nav from "~/components/Nav";
export default {
    components: {
        Nav,
    },
    data() {
        return {
            currentYear: "",
        };
    },
    mounted() {
        this.currentYear = new Date().getFullYear();
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
