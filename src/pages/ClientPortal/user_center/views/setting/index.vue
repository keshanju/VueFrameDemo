<template>
    <div>
        This is Setting Page!
        {{msg_str}}
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"

    @Component({

    })
    export default class Setting  extends Vue {
        public msg_str: string = "Setting Page";

        created() {
            console.log("Init Setting Success!")
        }
    }
</script>

<style scoped>

</style>
