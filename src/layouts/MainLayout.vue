<template>
    <q-layout view="lHh Lpr lFf">
        <q-drawer
                content-class="bg-grey-1"
                show-if-above
                v-model="leftDrawerOpen"
        >
            <q-list>
                <q-item-label
                        class="text-main-color text-center q-my-md"
                        header
                >
                    <span class="logo">Data<strong>Guard</strong></span>
                </q-item-label>
                <EssentialLink
                        :key="link.title"
                        v-bind="link"
                        v-for="link in tabs"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view class="q-pa-lg"/>
        </q-page-container>
    </q-layout>
</template>

<script>
    import EssentialLink from 'components/EssentialLink.vue';
    import axios from 'axios';

    export default {
        name: 'MainLayout',

        components: {
            EssentialLink,
        },

        data() {
            return {
                leftDrawerOpen: true,
                tabs: []
            };
        },

        beforeMount() {
            axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
                .then((response) => {
                    const {tabs, tabdata} = response.data.data
                    tabs.map(tab => {
                        this.tabs.push(
                            {
                                title: tabdata[tab].title,
                                link: tab,
                                icon: tabdata[tab].icon
                            }
                        )
                    })
                });
        }
    };
</script>
