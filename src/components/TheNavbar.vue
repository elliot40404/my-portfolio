<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from "gsap";

const navs = ref({
    home: true,
    about: false,
    projects: false,
    contact: false,
});

const setActive = (id) => {
    Object.keys(navs.value).forEach((key) => {
        navs.value[key] = false;
    });
    navs.value[id] = true;
};

onMounted(() => {
    gsap.fromTo(
        "#nav",
        {
            opacity: 0,
            y: -20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
        }
    )
})


</script>

<template>
    <nav id="nav">
        <ul>
            <li class="logo">
                <a href="#">A.</a>
            </li>
            <li>
                <a
                    @click="setActive('home')"
                    :class="[navs.home ? 'active' : '', 'item']"
                    href="#"
                >Home</a>
                <a
                    @click="setActive('about')"
                    :class="[navs.about ? 'active' : '', 'item']"
                    href="#about"
                >About Me</a>
                <a
                    @click="setActive('projects')"
                    :class="[navs.projects ? 'active' : '', 'item']"
                    href="#projects"
                >Projects</a>
                <a
                    @click="setActive('contact')"
                    :class="[navs.contact ? 'active' : '', 'btn']"
                    href="#contact"
                >Contact Me</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    position: sticky;
    top: 0;
    padding: 1rem;
    min-height: 100px;
    background: var(--dark);
    z-index: 20;
}
nav ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
li.logo a {
    font-size: 2rem;
    color: var(--primary);
}
a {
    color: var(--light);
    font-size: 1rem;
    font-weight: 500;
    margin: 0 1.5rem;
    transition: all 0.2s ease-in-out;
    position: relative;
}
a.item {
    &::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary);
        transition: all 0.2s ease-in-out;
    }
    &:hover::after {
        width: 100%;
    }
}
a.item.active {
    color: var(--accent);
    &::after {
        width: 100%;
    }
}

a.btn {
    padding: 0.5rem 1rem;
    border: 2px solid var(--primary);
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: inset 7.2em 0 0 0 var(--dark-orange);
        border: 2px solid var(--accent);
    }
}
a.btn.active {
    border: 2px solid var(--accent);
}
</style>