<template>
    <v-snackbar
        v-model="snackbar.visible"
        :bottom="snackbar.y === 'bottom'"
        :left="snackbar.x === 'left'"
        :multi-line="snackbar.mode === 'multi-line'"
        :right="snackbar.x === 'right'"
        :timeout="snackbar.timeout"
        :top="snackbar.y === 'top'"
        :vertical="snackbar.mode === 'vertical'"
        :color="snackbar.color"
    >
        {{ snackbar.text }}
        <v-btn class="ml-4" color="white black--text darken-2" @click="snackbar.visible = false">Fechar</v-btn>
    </v-snackbar>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            snackbar: {
                color: "error",
                visible: false,
                y: "top",
                x: "",
                mode: "vertical",
                timeout: 10000,
                text: "-",
            },
        };
    },
    mounted() {
        this.$eventHub.$on("msgError", (msg) => {
            this.snackbar.text = msg;
            this.snackbar.color = "error";
            this.snackbar.visible = true;
            <h1> Olaaaaa </h1>
        });
        this.$eventHub.$on("msgSuccess", (msg) => {
            this.snackbar.text = msg;
            this.snackbar.color = "success";
            this.snackbar.visible = true;
        });
    },
};
</script>
