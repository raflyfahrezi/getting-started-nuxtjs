<template>
    <div class="w-full py-3 px-5 shadow-md flex justify-between items-center">
        <AssetsNuxtLogo class="h-8" />
        <div class="flex">
            <NuxtLink
                v-bind:key="item.id"
                v-bind:to="item.url"
                v-for="item in navigationItem"
                class="ml-1 p-3 hover:text-unique transition-all duration-500"
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
                    id: 1,
                    url: '/',
                    text: 'Home',
                },
                {
                    id: 2,
                    url: '/about',
                    text: 'About',
                },
            ],
        }
    },
}
</script>
