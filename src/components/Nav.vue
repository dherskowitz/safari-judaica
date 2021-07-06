<template>
    <div class="flex items-center">
        <div
            class="menu__icon md:hidden"
            :class="{'change':menuOpen}"
            @click="menuOpen = !menuOpen"
        >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <nav
            class="z-20 flex flex-col items-center justify-between w-full nav bg-capeHoney-default md:flex-row md:w-auto"
            :class="{'hidden md:block': !menuOpen, 'absolute md:relative left-0 mt-64 md:mt-0 shadow-lg md:shadow-none': menuOpen}"
        >
            <g-link
                class="w-full px-8 py-4 text-lg text-center transition-colors duration-300 border-b-4 border-transparent hover:border-capeHoney-darker md:w-auto"
                to="/"
                exact
            >Home</g-link>
            <g-link
                class="w-full px-8 py-4 text-lg text-center transition-colors duration-300 border-b-4 border-transparent hover:border-capeHoney-darker md:w-auto"
                to="/shop/"
            >Shop</g-link>
            <g-link
                class="w-full px-8 py-4 text-lg text-center transition-colors duration-300 border-b-4 border-transparent hover:border-capeHoney-darker md:w-auto"
                to="/about/"
                exact
            >About</g-link>
            <g-link
                class="w-full px-8 py-4 text-lg text-center transition-colors duration-300 border-b-4 border-transparent hover:border-capeHoney-darker md:w-auto"
                to="/contact/"
                exact
            >Contact</g-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            menuOpen: false,
        };
    },
};
</script>

<style>
.bar1,
.bar2,
.bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 15px;
    transition: 0.4s;
}
.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}
nav > a.active {
    background: #bda27f;
}
@media (min-width: 768px) {
    nav > a.active {
        background: none;
        border-bottom: 4px solid #bda27f;
    }
}
</style>
