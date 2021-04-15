const App = Vue.createApp({
    data() {
        return {
          show: true,
          title: 'something',
          name: 'something else',
          year: 1991,
          books: [
            {title: 'something', author: 'something author',},
            {title: 'other', author: 'other author',},
            {title: 'third', author: 'third author',},
          ],
          x: 0,
          y: 0,
        }
    },
    methods: {
      addyear(){
        this.year++
      },
      toggleShow(){
        this.show = !this.show
      },
      handleMouseEvent(e){
        console.log('event type', e.type)
      },
      handleMouseMove(e){
        this.x = e.offsetX
        this.y = e.offsetY
      }
    }
})

App.mount('#app')