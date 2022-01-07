<script setup>
import { ref, onMounted, watch } from 'vue';
import { gsap } from "gsap";
const dark = ref(true);
const setIcon = () => {
    if (document.body.classList.contains('light-mode')) {
        dark.value = false;
    } else {
        dark.value = true;
    }
}
onMounted(() => {
    setIcon();
    gsap.fromTo(
        "#social",
        {
            opacity: 0,
            x: -20,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
        }
    )
});
const emit = defineEmits(['show']);
const props = defineProps({
    mode: Boolean,
});
watch(props, () => {
    setIcon();
});
</script>

<template>
    <teleport to="body">
        <div id="social" class="container">
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/avishek-acharya8">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a rel="noopener" target="_blank" href="https://github.com/elliot40404">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a rel="noopener" target="_blank" href="mailto:avishek.acharya8@gmail.com">
                <ion-icon name="mail"></ion-icon>
            </a>
            <button @click="$emit('show')">
                <Transition name="btn" mode="out-in">
                    <ion-icon v-if="!dark" name="moon"></ion-icon>
                    <ion-icon v-else name="sunny"></ion-icon>
                </Transition>
            </button>
        </div>
    </teleport>
</template>


<style lang="scss" scoped>
.container {
    position: fixed;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ion-icon {
        font-size: 1.5rem;
    }
    a {
        margin: 1rem;
        text-decoration: none;
        color: var(--accent);
    }
    button {
        margin: 1rem;
        background: none;
        border: none;
        ion-icon {
            color: var(--light);
        }
        cursor: pointer;
    }
}
.btn-enter-from,
.btn-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
.btn-enter-active,
.btn-leave-active {
    transition: opacity 0.2s ease-in-out;
}
ion-icon {
    &:hover {
        color: var(--dark-orange);
    }
}
</style>