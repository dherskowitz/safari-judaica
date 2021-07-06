<template>
            <footer class="mt-20 bg-outerSpace-default">
            <div class="p-10">
                <g-image src="~/assets/img/Safari_Juciaca_Logo-1024x864.png" width="200" />
            </div>
            <div
                class="py-3 text-center text-white bg-outerSpace-lighter"
            >Copyright {{ currentYear }} All Rights Reserved SafariJudaica.com</div>
        </footer>
</template>

<script>
export default {
    name: "Footer",
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
