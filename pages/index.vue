<template>
    <div>
        <div class="text-center my-10">
            <h1 class="text-5xl font-bold">Welcome to Nuxt.js</h1>
        </div>
        <div>
            <div v-for="user in users" :key="user.id">
                {{ user.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Home | Getting Started with Nuxtjs',
        }
    },
    data() {
        return {
            users: [],
        }
    },
    async fetch() {
        this.users = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        ).then((res) => res.json())
    },
}
</script>
