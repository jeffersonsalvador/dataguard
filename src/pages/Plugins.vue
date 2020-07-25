<template>
    <div>
        <h1 class="card-title">Marketing plugins</h1>
        <div class="row q-col-gutter-lg">
            <div v-for="(card, key) in cards" :key="key" class="col-4" :disabled="card.disabled">
                <q-card class="no-box-shadow rounded-borders full-height" bordered>
                    <q-card-section>
                        <div class="row">
                            <div class="card-title col-6">{{ card.title }}</div>
                            <div class="col-6 justify-end items-end">
                                <q-toggle
                                    :color="card.active ? 'green' : 'red'"
                                    :text="card.active ? 'green' : 'red'"
                                    :label="card.active ? 'Allowed': 'Blocked'"
                                    v-model="card.active"
                                    :disabled="card.disabled"
                                    class=""
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <span class="card-content">
                            {{ card.description }}
                        </span>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "Plugins",
        data () {
            return {
                cards: []
            }
        },
        mounted() {
            this.getCards(this.$route.params.tab)

        },
        watch: {
            $route(to) {
                this.getCards(to.params.tab)
            }
        },
        methods: {
            getCards (tab) {
                this.cards = []
                axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
                    .then(response => {
                        const {tabdata, plugins} = response.data.data
                        tabdata[tab].active.map( plugin => {
                            this.cards.push({
                                title: plugins[plugin].title,
                                description: plugins[plugin].description,
                                name: plugin,
                                active: true,
                                disabled: false
                            })
                        })
                        tabdata[tab].disabled.map( plugin => {
                            this.cards.push({
                                title: plugins[plugin].title,
                                description: plugins[plugin].description,
                                name: plugin,
                                active: true,
                                disabled: true
                            })
                        })
                        tabdata[tab].inactive.map( plugin => {
                            this.cards.push({
                                title: plugins[plugin].title,
                                description: plugins[plugin].description,
                                name: plugin,
                                active: false,
                                disabled: false
                            })
                        })
                    })
            }
        }

    }
</script>
