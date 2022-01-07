<script setup>
const emit = defineEmits(['theme', 'close']);
</script>

<template>
    <!-- <teleport to="body"> -->
        <div @click.self="$emit('close')" class="container">
            <h2>Choose a Theme</h2>
            <div class="box">
                <button @click="$emit('theme', 'dark')">
                    DARK
                    <ion-icon name="moon"></ion-icon>
                </button>
                <button @click="$emit('theme', 'light')">
                    LIGHT
                    <ion-icon name="sunny"></ion-icon>
                </button>
                <button @click="$emit('theme', 'system')">
                    SYSTEM
                    <ion-icon name="cog-outline"></ion-icon>
                </button>
            </div>
        </div>
    <!-- </teleport> -->
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background: rgba(10, 10, 10, 0.75);
    backdrop-filter: blur(5px) opacity(0.5);
}
@keyframes pop-up {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
h2 {
    color: #fff;
}
.box {
    background: var(--light);
    height: 100px;
    width: 350px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    animation: pop-up 0.2s ease-in-out;
}
button {
    cursor: pointer;
    padding: 10px;
    border: none;
    font-weight: 500;
    font-family: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    &:hover {
        background-color: var(--highlight);
    }
}
</style>