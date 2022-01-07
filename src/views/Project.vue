<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

const id = ref(0);

watchEffect(() => {
    id.value = parseInt(route.query.id);
});

const project = computed(() => {
    return store.getters.getProjectById(id.value);
});

const otherProjects = computed(() => {
    return store.getters.getProjects.filter(p => p.id != id.value).sort(() => .5 - Math.random()).slice(0, 3);
});

// TODO: update next and prev logic

const next = computed(() => {
    return store.getters.getProjects.length > id.value;
});

const prev = computed(() => {
    return id.value > 1;
});

</script>

<template>
    <div id="view-project" class="container">
        <div class="content">
            <h1>{{ project.title }}</h1>
            <img
                class="cover"
                :src="project.coverPicture.url"
                alt="cover image"
            />
            <h4>{{ project.what }}</h4>
            <p>{{ project.description }}</p>
            <div class="block">
                <img
                    :src="project.imageOne.url"
                    alt="project related image"
                />
                <div class="text">
                    <h4>{{ project.why }}</h4>
                    <p>{{ project.solves }}</p>
                </div>
            </div>
            <div class="block alt">
                <img
                    :src="project.imageTwo.url"
                    alt="project related image"
                />
                <div class="text">
                    <h4>{{ project.how }}</h4>
                    <p>{{ project.process }}</p>
                </div>
            </div>
            <h4>Tech Stack</h4>
            <div class="stack">
                <img loading="lazy" class="grid-item" src="@/assets/png/js.png" alt="logo" />
                <img loading="lazy" class="grid-item" src="@/assets/png/node.webp" alt="logo" />
                <img loading="lazy" class="grid-item" src="@/assets/png/ts.png" alt="logo" />
                <img loading="lazy" class="grid-item" src="@/assets/png/vue.png" alt="logo" />
                <img loading="lazy" class="grid-item" src="@/assets/png/html.webp" alt="logo" />
            </div>
            <a class="primary cta" target="_blank" :href="project.site">
                VISIT SITE
                <ion-icon name="open-outline"></ion-icon>
            </a>
            <a
                class="cta"
                rel="noopener"
                target="_blank"
                :href="project.repo"
            >CHECKOUT REPO</a>
        </div>
        <div class="nav">
            <router-link
                :to="`/projects?id=${id - 1}`"
                :class="[prev ? '' : 'disable']"
            >&lt;&lt; PREV</router-link>
            <router-link
                :to="`/projects?id=${id + 1}`"
                :class="[next ? '' : 'disable']"
            >NEXT &gt;&gt;</router-link>
        </div>
        <h3>OTHER PROJECTS</h3>
        <div class="other-projects">
            <div
                v-for="(project, index) in otherProjects"
                :key="index"
                class="project"
                @click="router.push(`/projects?id=${project.id}`)"
            >
                <img
                    :src="project.coverPicture.url"
                    alt="project logo"
                />
                <h5>{{ project.title }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    padding: 1.5rem;
    text-align: center;
}
.content {
    padding: 1rem 3rem;
}
h1 {
    font-size: 2rem;
    padding: 1.5rem;
    position: relative;
}
h4 {
    font-size: 1rem;
    padding: 1rem;
    position: relative;
    text-align: left;
    color: var(--primary);
}
p {
    font-size: 0.9rem;
    padding: 0 1rem;
    text-align: left;
    font-weight: 300;
    line-height: 1.3;
    &::selection {
        background: var(--dark-hue);
        color: var(--accent);
    }
}
img.cover {
    // max-width: 800px;
    // max-height: 450px;
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
    padding: 1rem;
    aspect-ratio: 16 / 9;
}
.block {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    margin: 1rem 0;
    img {
        max-width: 400px;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 16 / 9;
    }
}
.block.alt {
    flex-direction: row-reverse;
}
.stack {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
}
.cta {
    display: inline-block;
    margin: 3rem 1.5rem;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    font-size: 0.8rem;
    width: 200px;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: inherit;
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
    ion-icon {
        color: var(--dark);
        margin-left: 0.5rem;
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
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    a {
        font-size: 1rem;
        background: transparent;
        color: var(--light);
        border: none;
        font-weight: 500;
        font-family: inherit;
        letter-spacing: 1px;
        cursor: pointer;
    }
    a.disable {
        color: var(--muted);
        cursor: not-allowed;
        pointer-events: none;
    }
}
h3 {
    font-size: 1.6em;
    padding: 1rem 3rem;
    font-weight: 600;
    text-align: left;
    font-family: inherit;
    letter-spacing: 1px;
}

.other-projects {
    display: flex;
    padding: 1rem 3rem;
    align-items: center;
    // justify-content: space-between;
    gap: 2.5rem;
}
.project {
    cursor: pointer;
    h5 {
        font-size: 1rem;
        font-weight: 600;
        font-family: inherit;
        letter-spacing: 1px;
        padding: 0.5rem 0;
    }
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
        aspect-ratio: 1 / 1;
    }
}
</style>