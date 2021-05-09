<template>
    <v-container grid-list-xl>
        <v-progress-linear v-if="items == null" color="primary" height="12"></v-progress-linear>
        <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
                <v-expansion-panel-header> {{ item.name }} </v-expansion-panel-header>
                <v-expansion-panel-content> ID: {{ item.id }} - Nome: {{ item.name }} </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: "Main",
    props: {
        source: String,
    },

    data: () => ({
        items: null,
    }),

    mounted() {
        this.getData();
    },

    methods: {
        getData() {
            axios
                .get("https://api.elcoma.com.br/api/visits/get_clients")
                .then((res) => {
                    console.log(res.data.clients);
                    if (res.data && res.data.clients) {
                        console.log("loaded");
                        this.items = res.data.clients;
                    }
                })
                .catch(() => {
                    this.$eventHub.$emit("msgError", "Erro ao buscar dados.");
                })
                .finally(() => {
                    this.processing = false;
                });
        },
    },
};
</script>

<style></style>
