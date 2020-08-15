import Vue from "vue"
import Router from "vue-router"
import TheValidationPage from "@/components/TheValidationPage.vue"
import ThePokemonsPage from "@/components/ThePokemonsPage.vue"
import TheFirstTestPage from "@/components/TheFirstTestPage.vue"
import TheSecondTestPage from "@/components/TheSecondTestPage.vue"
import TheThridTestPage from "@/components/TheThridTestPage.vue"

Vue.use(Router)

export const router = new Router({
    mode:"history",
    routes:[
       { path:"/",component:TheValidationPage},
       { path:"/pokemons",component:ThePokemonsPage},
       { path:"/test1",component:TheFirstTestPage},
       { path:"/test2",component:TheSecondTestPage},
       { path:"/test3",component:TheThridTestPage}
    ]
})