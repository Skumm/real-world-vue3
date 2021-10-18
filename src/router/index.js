import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventsDetail from "../views/EventsDetails.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  //con :id indicamos que este id es dinamico
  {
    path: "/events/:id",
    name: "EventsDetail",
    props: true,
    component: EventsDetail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
