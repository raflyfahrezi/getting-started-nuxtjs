<template>
    <div class="w-full py-3 px-5 shadow-md flex justify-between items-center">
        <AssetsNuxtLogo class="h-8" />
        <div class="flex">
            <NuxtLink
                class="ml-1 p-3"
                v-bind:key="item"
                v-bind:to="item.url"
                v-for="item in navigationItem"
            >
                <p>
                    {{ item.text }}
                </p>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigationItem: [
                {
                    url: '/',
                    text: 'Home',
                },
                {
                    url: '/about',
                    text: 'About',
                },
            ],
        }
    },
}
</script>
