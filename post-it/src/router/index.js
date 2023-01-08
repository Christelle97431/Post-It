import { createRouter, createWebHistory } from "vue-router";
import NotesView from "../views/NotesView.vue";
import Note from "../views/NoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: NotesView,
    },

    {
      path: "/note/:id",
      name: "note",
      component: Note,
    },

    {
      path: "/formulaire",
      name: "formulaire",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FormulaireView.vue"),
    },

  ],
});

export default router;
