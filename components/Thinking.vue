<template>
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "Thinking"
};
</script>

<style>
.loader {
    position: relative;
    display: inline-block;
    width: 96px;
    height: 96px;
    animation: rotate 1.2s linear infinite;
}

.loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(#2563eb, #38bdf8, #7dd3fc);
}

.loader span:nth-of-type(1) {
    filter: blur(5px);
}

.loader span:nth-of-type(2) {
    filter: blur(10px);
}

.loader span:nth-of-type(3) {
    filter: blur(25px);
}

.loader span:nth-of-type(4) {
    filter: blur(50px);
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
