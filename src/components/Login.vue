
<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Bem vindo a Vagalume</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field 
                                    prepend-icon="mdi-account" 
                                    name="login" 
                                    label="Username" 
                                    type="text"
                                    ></v-text-field>
                                    <v-text-field 
                                    id="password" 
                                    prepend-icon="mdi-lock" 
                                    name="Password" 
                                    label="Password" 
                                    type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="login">Entrar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    props: {
        source: String,
    },

    data: () => ({
        dataToSend: {
            username: "projetoselecao", // TODO: Retirar, deixei preenchido para facilitar dev
            password: "Selec@o1", // TODO: Retirar, deixei preenchido para facilitar dev
        }, // FIXME: Salvar o token no localstorage
    }),
    methods: {
        login() {
            axios
                .post("https://api.elcoma.com.br/api/visits/login", this.dataToSend)
                .then((res) => {
                    if (res.data && res.data.success == true) {
                        res.data.token; // Salvar o token no localstorage para ser passado nas proximas requisições

                        this.$router.replace({ name: "main" });
                        this.$eventHub.$emit("msgSuccess", "Login efetuado com sucesso.");
                    } else {
                        this.$eventHub.$emit("msgError", "Erro ao efetuar login. Verifique seu login e/ou senha.");
                    }
                })
                .catch(() => {
                    this.$eventHub.$emit("msgError", "Erro ao enviar requisição");
                })
                .finally(() => {
                    this.processing = false;
                });
        },
    },
};
</script>

<style></style>
