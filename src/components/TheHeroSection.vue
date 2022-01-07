<script setup>
import { onMounted } from 'vue'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const link = () => {
    document.getElementById('about').scrollIntoView();
}

gsap.registerPlugin(Flip, ScrollTrigger, MotionPathPlugin);
const tl = gsap.timeline();
onMounted(() => {
    tl.fromTo(
        "#hero-subtitle",
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
    ).fromTo(
        "#hero-title",
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
    ).fromTo(
        "#hero-desc",
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
    ).fromTo(
        "#hero-cta",
        {
            opacity: 0,
            y: -20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
        },
    "-=0.5")
})

</script>

<template>
    <div data-section id="home" class="hero">
        <div class="content">
            <h2 id="hero-subtitle">Heyy! I am</h2>
            <h1 id="hero-title">
                AVISHEK
                <span class="outline">ACHARYA,</span>
            </h1>
            <p id="hero-desc">
                a
                <strong>Full Stack Developer</strong>. I create meaningful and responsive user experiences
                <br />with solid performant backends.
            </p>
            <button id="hero-cta" @click="link">HIRE ME</button>
        </div>
        <div class="down">
            <a href="#about">
                <ion-icon name="arrow-down-outline"></ion-icon>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    height: calc(100vh - 100px);
    text-align: center;
    background-image: url("../assets/waves.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: relative;
    overflow: hidden;
}
.content {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    max-width: max-content;
    margin: 0 auto;
}
h1 {
    // font-size: 4rem;
    font-size: clamp(2rem, 10vw, 4rem);
    font-weight: 700;
    span {
        color: var(--dark);
        -webkit-text-stroke: 2px var(--primary);
    }
    padding: 0.5rem 0;
    white-space: nowrap;
}
h2 {
    // font-size: 2.5rem;
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    text-align: left;
    padding: 0.5rem 0;
}
p {
    // font-size: 1.2rem;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.5;
    padding: 0.5rem 0;
    text-align: left;
    strong {
        color: var(--accent);
    }
}
button {
    background: var(--secondary);
    color: var(--lighter);
    font-size: 1.2rem;
    font-weight: 500;
    font-family: inherit;
    letter-spacing: 1px;
    padding: 0.8rem 2.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin: 2rem;
    &:hover {
        background: var(--dark-orange);
    }
}
.down {
    position: absolute;
    bottom: 0;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    ion-icon {
        font-size: 2rem;
        color: var(--sky);
    }
    animation: alternate-down 2s ease-in infinite;
}
@keyframes alternate-down {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>