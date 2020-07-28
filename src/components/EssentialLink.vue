<template>
    <q-item
            clickable
            tag="a"
            :to="link"
            :class="this.$route.params.tab === link ? 'bg-white border-left' : ''"
    >
        <q-item-section
                v-if="icon"
                avatar
        >
            <q-icon :name="`img:img/${icon}.svg`" />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
    export default {
        name: 'EssentialLink',
        props: {
            title: {
                type: String,
                required: true
            },

            link: {
                type: String,
                default: '#'
            },

            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>
