<script setup>

import { onMounted, computed } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from 'vuex';
const store = useStore();

const about = computed(() => store.getters.getAbout);
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            scrub: true,
            end: "center center",
        },
    });
    tl.fromTo("#about-title", {
        opacity: 0,
        y: -10,
    }, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
    }).fromTo("#about-desc", {
        opacity: 0,
        y: -10,
    }, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
    }, "-=0.5");
});

const showCv = () => window.open('/AvishekAcharyaCV.pdf', '_blank').focus();

</script>

<template>
    <div data-section class="container" id="about">
        <h1 id="about-title">ABOUT ME</h1>
        <p id="about-desc">{{ about }}</p>
        <button @click="showCv" class="button">My Resume</button>
        <h1>My Skills</h1>
        <div class="grid">
            <img loading="lazy" class="grid-item" src="@/assets/png/js.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/node.webp" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/ts.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/vue.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/html.webp" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/css.webp" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/nuxt.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/react.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/next.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/bash.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/git.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/python.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/docker.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/mongo.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/circleci.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/mysql.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/postgres.png" alt="logo" />
            <img loading="lazy" class="grid-item" src="@/assets/png/firebase.png" alt="logo" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    min-height: calc(100vh - 100px);
    height: 100vh;
    padding: 1.5rem;
}
h1 {
    font-size: 2rem;
    padding: 10vh 3rem 0;
    position: relative;
    &::before {
        content: "<";
        margin: 5px;
        color: var(--accent);
    }
    &::after {
        content: "/>";
        margin: 5px;
        color: var(--accent);
    }
}
h1:last-of-type {
    margin: 2rem 0 1.5rem 0;
    padding: 1rem;
}
p {
    max-width: 75ch;
    padding: 1.5rem 4rem;
    line-height: 1.5;
    margin: 0 auto;
    text-align: left;
    font-size: 1.1rem;
}
.button {
    padding: 1rem 2rem;
    color: var(--dark);
    border: none;
    border-radius: 5px;
    margin: 2rem;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease-in-out;
    background: var(--accent);
    position: relative;
    &:hover {
        background: var(--dark-orange);
        color: var(--lighter);
    }
}
.grid {
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    grid-auto-rows: 60px;
    grid-gap: 1.5rem;
    margin: 0 auto;
}
img.grid-item {
    max-width: 60px;
    height: 60px;
    object-fit: contain;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1) rotate(5deg);
        background: var(--dark-hue);
    }
}
</style>