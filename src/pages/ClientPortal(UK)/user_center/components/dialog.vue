<!--  -->
<template>
    <div class="dialog">
        <el-dialog
            :visible.sync="dialogVisible"
            :before-close="close"
            :close-on-press-escape="closeModal"
            :close-on-click-modal="closeModal"
            :show-close="showClose"
            width="100%"
        >
            <div id="dialog-content">
                <component
                    :is="component"
                    :params="params"
                    :contiune="contiune"
                    :refresh="refresh"
                    @closeFun="close"
                ></component>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    props: [
        "dialogVisible",
        "showClose",
        "params",
        "component",
        "refresh",
        "closeModal",
        "contiune",
    ],
    data() {
        return {};
    },
    methods: {
        close() {
            if (
                typeof this.refresh !== "undefined" &&
                this.refresh instanceof Function
            ) {
                this.refresh();
            }
            this.$emit("update:dialogVisible", false);
            this.$emit("closeChange");
        },
    },
    watch: {},
};
</script>
<style lang="scss">
.dialog {
    .el-dialog {
        max-width: 500px;
        max-height: 560px;
    }

    .el-dialog__body {
        padding: 20px 70px 56px;
    }
    @media (max-width: 768px) {
        .el-dialog__body {
            padding: 30px 20px;
        }
    }
}
</style>
