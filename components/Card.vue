<template>
    <div class="grid grid-cols-3 gap-3">
        <div
            :key="user.id"
            v-for="user in users"
            class="
                p-3
                rounded
                border-2
                cursor-default
                transition-all
                hover:bg-gray-100
                duration-500
            "
        >
            <p class="text-center font-bold mb-3">{{ user.name }}</p>
            <p>Username : {{ user.username }}</p>
            <p>Email : {{ user.email }}</p>
            <p>Phone : {{ user.phone }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['users'],
}
</script>
