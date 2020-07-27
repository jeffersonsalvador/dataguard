<template>
    <div>
        <h1 class="card-title">{{ title }} plugins</h1>
        <div class="row q-col-gutter-lg">
            <template v-if="cards()">
            <div v-for="(card, key) in cards().plugins" :key="key" class="col-4" :disabled="card.disabled">
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
                                    :disable="card.disabled"
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
            </template>
            <template v-else>loading...</template>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "Plugins",
        data () {
            return {
                title: '',
                tabs: []
            }
        },
        mounted() {
            this.getCards()

        },
        computed: {
            tab() {
                return this.$route.params.tab
            }
        },
        watch: {
            $route() {
                this.getTitle()
            }
        },
        methods: {
            cards() {
                return this.tabs[this.tab]
            },
            getTitle() {
                this.title = this.tabs[this.tab].title
            },
            getPlugins(tab, tabdata, plugins) {
                let status = ['active', 'inactive', 'disabled']
                let allPlugins = []
                status.map(status => {
                    tabdata[tab][status].map( plugin => {
                        allPlugins.push({
                            title: plugins[plugin].title,
                            description: plugins[plugin].description,
                            active: status === 'active' ? true : false,
                            disabled: status === 'disabled' ? true : false
                        })
                    })
                })
                return allPlugins
            },
            getCards () {
                axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
                    .then(response => {
                        const {tabs, tabdata, plugins} = response.data.data
                        tabs.map( tab => {
                            let cards = this.getPlugins(tab, tabdata, plugins)
                            this.tabs[tab] = {
                                title: tabdata[tab].title,
                                plugins: cards
                            }
                        })
                        this.getTitle(this.$route.params.tab)
                    })
            }
        }

    }
</script>
