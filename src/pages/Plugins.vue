<template>
    <div>
        <h1 class="card-title">Marketing plugins</h1>
        <div class="row q-col-gutter-lg">
            <div v-for="(plugin, key) in plugins" :key="key" class="col-4">
                <q-card class="no-box-shadow rounded-borders" bordered>
                    <q-card-section>
                        <div class="row">
                            <div class="card-title col-6">{{ plugin.title }}</div>
                            <div class="col-6 text-right">
                                <q-toggle
                                    :color="models[key] ? 'green' : 'red'"
                                    :label="models[key] ? 'Allowed': 'Blocked'"
                                    v-model="models[key]"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        {{ plugin.description }}
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Plugins",
        data () {
            return {
                models: []
            }
        },
        mounted() {
            this.$store.dispatch(`plugin/getPlugins`, {
                plugins: this.plugins
            })
        },
        computed: {
            plugins () {
                return this.$store.state.plugin.plugins
            }
        }

    }
</script>
