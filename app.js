const App = Vue.createApp({
    data() {
        return {
          show: true,
          title: 'something',
          name: 'something else',
          year: 1991
        }
    },
    methods: {
      addyear(){
        this.year++
      },
      toggleShow(){
        this.show = !this.show
      },
      handleMouseEvent(){
        console.log('mouse event')
      }
    }
})

App.mount('#app')