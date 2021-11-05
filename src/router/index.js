import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routerOptions = [
  {
    path: "/login",
    name: "Login",
    meta: {
      isPublic: true,
    }
  },
  {
    path: "/recuperar",
    name: "PasswordRecovery",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/nuevousuario",
    name: "FirstAdmissionA",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/nuevousuario2",
    name: "FirstAdmissionB",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/nuevousuario3",
    name: "FirstAdmissionC",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatida",
    name: "RecoveryAtIdA",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatidb",
    name: "RecoveryAtIdB",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatidc",
    name: "RecoveryAtIdC",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatidd",
    name: "RecoveryAtIdD",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatide",
    name: "RecoveryAtIdE",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatiderror",
    name: "RecoveryAtIdError",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/recuperatidexito",
    name: "RecoveryAtIdSuccess",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/user/password/recover/validate/:token",
    name: "NewPassword",
    meta: {
      isPublic: true,
      authSetting: true
    }
  },
  {
    path: "/politicas",
    name: "PrivacyPolicies",
    meta: {
      isPublic: true,
      authSetting: true,
      isUseTerms: true
    }
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      isPublic: false,
      isAdmin: false,
      noFooter: true
    }
  },
  {
    path: "/",
    name: "Home3D",
    meta: {
      isPublic: false,
      isAdmin: false,
      noFooter: true
    }
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      isPublic: false,
      isAdmin: true
    }
  },
  {
    path: "/perfil",
    name: "Profile",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/perfil/follow/:id",
    name: "ProfileUsers",
    meta: {
      isPublic: false
    }
  },
  {
    path: "/perfil/editar",
    name: "EditProfile",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/networking",
    name: "Networking",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/networking/meet/:idNetworking",
    name: "Meet",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/academico",
    name: "Academic",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/cursos",
    name: "AcademicAllCourses",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/empleo",
    name: "Job",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/crearOferta",
    name: "NewOffer",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/recomendaciones/:id",
    name: "Recommendations",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/verOferta/:id",
    name: "ViewOffer",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/verTodos",
    name: "ViewAll",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/verTodosCursosEducacionContinua",
    name: "ViewAllCourseEducationContinua",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/ViewAllMyCourses",
    name: "ViewAllMyCourses",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/verTodasRecomendaciones",
    name: "ViewAllRecommendations",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/cursosRecomendados",
    name: "ViewAllRecomendedCourses",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/certificadoSeleccionado",
    name: "CertificateSelect",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/verProceso/:id",
    name: "NomineeProcess",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/editarOferta/:id",
    name: "EditOffer",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/postulados/:id/:name",
    name: "AllNominees",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/idi",
    name: "Idi",
    meta: {
      isPublic: false,
      isAdmin: true
    }
  },
  {
    path: "/idi/:id",
    name: "ResearchGroupInfo",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/idi/meet/:idEvent",
    name: "IdiMeet",
    meta: {
      isPublic: false
    }
  },
  {
    path: "/idi/info/:id",
    name: "ResearchGroup",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/eventos",
    name: "Events",
    meta: {
      isPublic: false,
      isAdmin: true
    }
  },
  {
    path: "/eventos/meet/:idEvent",
    name: "Event",
    meta: {
      isPublic: false
    }
  },
  {
    path: "/allevents",
    name: "AcademicAllCourses",
    props: true,
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/comercial",
    name: "Commercial",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/comercial/shop",
    name: "ComercialStore",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/notificaciones",
    name: "AllNotifications",
    meta: {
      isPublic: false
    }
  },
  {
    path: "/Calendar",
    name: "Calendar",
    meta: {
      isPublic: false
    }
  },
  {
    path: "/ovi/:id",
    name: "Ovi",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
  {
    path: "/oviAdmin",
    name: "OviAdministrator",
    meta: {
      isPublic: false,
      isAdmin: false
    }
  },
];

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/${r.name}`)
  };
});

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const auth = store.getters.getAuth;
  const token = store.getters.getToken;
  if (to.matched.some(record => !record.meta.isPublic)) {
    if (!auth || !token) {
      next({ path: "/login" });
    }
    next();
  }

  next();
});

export default router;
