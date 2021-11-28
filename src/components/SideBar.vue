<template>
    <v-navigation-drawer
    permanent
    width="400"
    dark
    >
    <v-list>
        <v-list-item class="px-2">
        <v-list-item-avatar>
            <v-img src="..\assets\eu.jpg"></v-img>
        </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
        <v-list-item-content>
            <v-list-item-title class="text-h6">
            Pedro Sasso
            </v-list-item-title>
            <v-list-item-subtitle>pp_sasso@hotmail.com</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
        nav
        dense
    >
        <v-list-item href="/">
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home Page</v-list-item-title>
        </v-list-item>
        <v-list-item href="/action">
            <v-list-item-icon>
                <v-icon>mdi-car-traction-control</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Action</v-list-item-title>
            </v-list-item>
        <v-list-item href="/kids">
            <v-list-item-icon>
                <v-icon>mdi-balloon</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Kids</v-list-item-title>
        </v-list-item>
        <v-list-item href="comedy">
            <v-list-item-icon>
                <v-icon>mdi-emoticon-excited-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Comedy</v-list-item-title>
        </v-list-item>
        <v-list-item href="horror">
            <v-list-item-icon>
                <v-icon>mdi-knife</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Horror</v-list-item-title>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
    name:"SideBar"
}

</script>

<style scoped>
    

</style>
