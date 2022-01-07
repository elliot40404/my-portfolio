<script setup>

</script>

<template>
    <footer>
        <h3>&copy; {{ new Date().getFullYear() }} avishek.co.in &#174;</h3>
        <h1 class="logo">A.</h1>
        <div class="links">
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/avishek-acharya8">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a rel="noopener" target="_blank" href="https://github.com/elliot40404">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a rel="noopener" target="_blank" href="mailto:avishek.acharya8@gmail.com">
                <ion-icon name="mail"></ion-icon>
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background: var(--dark-hue);
    color: var(--light);
    padding: 1rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
}
.logo {
    font-size: 2.5rem;
    padding: 1.5rem;
    position: relative;
}
.links {
    padding: 1rem 3rem;
    ion-icon {
        font-size: 1.5rem;
        margin: 0.8rem;
        color: var(--light);
        &:hover {
            color: var(--accent);
        }
    }
}
</style>