<template>
    <div class="container mx-auto">
        <Header/>
        <slot />
        <Footer/>
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
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
    components: {
        Header,
        Footer
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
