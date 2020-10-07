import Vue from 'vue'
import Vuex from 'vuex'
// import blog from './modules/blog'
// import menu from './modules/menu'
// import products from './modules/products'
// import announcements from './modules/announcements'
// import cart from './modules/cart'
// import filter from './modules/filter'
// import filterAnnouncements from './modules/filterAnnouncements'
// import layout from './modules/layout'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    // modules: {
    //   blog,
    //   menu,
    //   products,
    //   announcements,
    //   filterAnnouncements,
    //   cart,
    //   filter,
    //   layout
    // }
  })
}
export default createStore
