import {
    createStore
} from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

const store = createStore({
    state: {
        projects: [],
        about: "",
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects;
        },
        setAbout(state, about) {
            state.about = about;
        }
    },
    actions: {
        setProjects({
            commit
        }, projects) {
            commit('setProjects', projects);
        },
        setAbout({
            commit
        }, about) {
            commit('setAbout', about);
        }
    },
    getters: {
        getProjectById(state) {
            return (id) => {
                return state.projects.find(project => project.id == id);
            };
        },
        getProjects(state) {
            return state.projects;
        },
        getAbout(state) {
            return state.about;
        }
    },
    plugins: [vuexLocal.plugin],
});

export default store;