<template>
    <v-app>
        <Message ref="msg"></Message>
        <transition name="body">
            <router-view></router-view>
        </transition>
    </v-app>
</template>

<script>
import Message from "./components/shared/Message";

export default {
    name: "App",
    components: {
        Message,
    },

    data: () => ({
        logged: false, // FIXME: Salvar o token no localstorage
    }),

    mounted() {
        if (this.logged) {
            this.$router.replace({ name: "main" });
        } else {
            this.$router.replace({ name: "login" });
        }
    },
};
</script>
