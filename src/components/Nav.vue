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
            class="nav flex justify-between items-center bg-capeHoney flex-col md:flex-row w-full md:w-auto z-20"
            :class="{'hidden md:block': !menuOpen, 'absolute md:relative left-0 mt-64 md:mt-0': menuOpen}"
        >
            <g-link
                class="py-4 px-8 border-b-4 border-transparent hover:border-capeHoney-darker transition-colors duration-300 w-full md:w-auto text-center"
                to="/"
                exact
            >Home</g-link>
            <g-link
                class="py-4 px-8 border-b-4 border-transparent hover:border-capeHoney-darker transition-colors duration-300 w-full md:w-auto text-center"
                to="/about/"
                exact
            >About</g-link>
            <g-link
                class="py-4 px-8 border-b-4 border-transparent hover:border-capeHoney-darker transition-colors duration-300 w-full md:w-auto text-center"
                to="/shop/"
                exact
            >Shop</g-link>
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
    pointer-events: none;
}
@media (min-width: 768px) {
    nav > a.active {
        background: none;
        border-bottom: 4px solid #bda27f;
        pointer-events: none;
    }
}
</style>
