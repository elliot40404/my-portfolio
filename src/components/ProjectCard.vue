<script setup>
const props = defineProps({
    data: Object,
});
// TODO: use slugs to navigate
</script>

<template>
    <div class="card">
        <img :src="data.coverPicture.url" alt="project logo" />
        <div class="content">
            <h3>{{ data.title }}</h3>
            <p>{{ data.blurb }}</p>
            <div class="tech-stack">
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="logo-github"></ion-icon>
                <ion-icon name="logo-nodejs"></ion-icon>
            </div>
            <router-link class="primary cta" :to="`/projects?id=${data.id}`">SEE PROJECT</router-link>
            <a class="cta" rel="noopener" target="_blank" :href="data.repo">CHECKOUT REPO</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    gap: 2rem;
    img {
        width: 200px;
        height: 200px;
        border-radius: 5px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
    }
    padding: 2rem 2rem 2rem 3.5rem;
    // background: var(--muted);
    max-width: 1000px;
    position: relative;
    opacity: 0.9;
    border-radius: 10px;
    isolation: isolate;
    &:hover {
        opacity: 1;
        background-color: var(--dark-hue);
    }
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--primary);
        background: var(--dark);
        z-index: 5;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 10px;
        transform: translateY(10%);
        width: 2px;
        height: 100%;
        background: var(--accent);
    }
}
.card:first-child {
    &::after {
        bottom: 50%;
        transform: translateY(100%);
        height: 60%;
    }
}
.card:last-child {
    &::after {
        top: 0;
        height: 49%;
    }
}
.card:only-child {
    &::after {
        display: none;
    }
}
.content {
    text-align: left;
    padding: 1rem 0 0;
    h3 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: 400;
        letter-spacing: 1.5px;
        font-variant: small-caps;
    }
    p {
        font-size: 0.8rem;
        margin: 1rem 0 0.5rem;
        line-height: 1.4;
        letter-spacing: 1px;
        font-weight: lighter;
    }
}
.cta {
    display: inline-block;
    margin: 0.5rem 1rem 0 0;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: transparent;
    color: var(--light);
    text-decoration: none;
    border: 2px solid var(--orange);
    transition: all 0.2s ease-in-out;
    font-weight: normal;
    &:hover {
        background: var(--dark-orange);
        color: var(--lighter);
        border: 2px solid var(--dark-orange);
    }
}
.primary.cta {
    background: var(--orange);
    color: var(--lighter);
    &:hover {
        background: var(--dark-orange);
        color: var(--lighter);
        border: 2px solid var(--dark-orange);
    }
}
.tech-stack {
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    color: var(--accent);
    padding: 0.5rem 0;
}
</style>