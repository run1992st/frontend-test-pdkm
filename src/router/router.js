import Vue from "vue"
import Router from "vue-router"
import ValidationPage from "@/components/ValidationPage.vue"
import PokemonsPage from "@/components/PokemonsPage.vue"
import TestOnePage from "@/components/TestOnePage.vue"
import TestTwoPage from "@/components/TestTwoPage.vue"
import TestThreePage from "@/components/TestThreePage.vue"

Vue.use(Router)

export const router = new Router({
    mode:"history",
    routes:[
       { path:"/",component:ValidationPage},
       { path:"/pokemons",component:PokemonsPage},
       { path:"/test1",component:TestOnePage},
       { path:"/test2",component:TestTwoPage},
       { path:"/test3",component:TestThreePage}
    ]
})