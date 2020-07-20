<template>
    <div class="row">
        <q-card class="col-4 no-box-shadow" bordered>
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
        </q-card>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        mounted() {
            console.log(this.$store)
        }
    }
</script>
