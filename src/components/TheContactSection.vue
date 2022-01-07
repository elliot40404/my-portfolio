<script setup>
import Project from './ProjectCard.vue';

</script>

<template>
    <div class="background">
        <div data-section class="container" id="contact">
            <h1>DROP A HELLO</h1>
            <h2>I WILL GET BACK AS SOON AS I CAN</h2>
            <form name="contact" class="form" method="POST" netlify>
                <div class="form-grp">
                    <label for="name">NAME</label>
                    <input id="name" name="name" type="text" />
                </div>
                <div class="form-grp">
                    <label for="email">EMAIL</label>
                    <input id="email" name="email" type="text" />
                </div>
                <div class="form-grp">
                    <label for="query">QUERY</label>
                    <textarea name="query" id="query"></textarea>
                </div>
                <button type="submit">SEND</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background {
    background-image: url("../assets/blob.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    height: 100vh;
    padding: 1.5rem;
    text-align: center;
}
h1 {
    font-size: 2rem;
    padding: 3rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: 4rem;
}
h2 {
    font-size: 1.2rem;
    padding: 1rem 3rem;
    font-weight: normal;
    letter-spacing: 1.5px;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    margin: 10vh auto;
    max-width: 30ch;
    width: clamp(30ch, 40vw, 45ch);
}
.form-grp {
    label {
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1.5px;
        display: block;
        margin-bottom: 0.5rem;
        text-align: left;
    }
    input,
    textarea {
        font-size: 0.9rem;
        letter-spacing: 1.5px;
        width: 100%;
        padding: 0.6rem;
        border: 2px solid var(--light);
        border-radius: 5px;
        color: var(--light);
        background: transparent;
        resize: none;
        font-family: inherit;
        line-height: 1.2;
    }
}
button {
    font-size: 1rem;
    background: var(--secondary);
    border: none;
    padding: 0.5rem 1.5rem;
    font-family: inherit;
    font-weight: 500;
    border-radius: 5px;
    color: var(--light);
    cursor: pointer;
    &:hover {
        background: var(--orange);
    }
}
</style>