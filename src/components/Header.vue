<template>
    <header
        class="relative flex flex-row justify-between shadow-md bg-capeHoney-default md:rounded-lg md:pl-2"
    >
        <g-link to="/">
            <g-image src="~/assets/img/Safari_Juciaca_Logo-1935x583.png" width="200" />
        </g-link>
        <Nav />
    </header>
</template>

<script>
import Nav from "~/components/Nav";
export default {
    name: "Header",
    components: {
        Nav
    },
};
</script>
