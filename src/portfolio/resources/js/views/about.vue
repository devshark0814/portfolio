<template>
    <div>
        <div>about</div>
        <v-btn depressed color="primary" @click="clickBtn"> Primary </v-btn>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        clickBtn() {
            this.$router.push("/dashboard");
        }
    }
};
</script>
