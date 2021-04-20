const App = Vue.createApp({
  data() {
    return {
      show: true,
      showFavOnly: false,
      showUnfavOnly: false,
      url: 'https://www.startpage.com',
      title: 'something',
      name: 'something else',
      year: 1991,
      books: [
        { title: 'something', author: 'something author', cover: '/assets/1.jpg', isFav: false },
        { title: 'other', author: 'other author', cover: '/assets/2.jpg', isFav: false },
        { title: 'third', author: 'third author', cover: '/assets/3.jpg', isFav: false },
      ],
      x: 0,
      y: 0,
    }
  },
  methods: {
    addyear() {
      this.year++
    },
    toggleShow() {
      this.show = !this.show
    },
    toggleFavShow() {
      this.showFavOnly = true
      this.showUnfavOnly = false
    },
    toggleUnfavShow() {
      this.showFavOnly = false
      this.showUnfavOnly = true
    },
    showAll() {
      this.showFavOnly = false
      this.showUnfavOnly = false
    },
    handleMouseEvent(e) {
      console.log('event type', e.type)
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFav(index) {
      this.books[index].isFav = !this.books[index].isFav
    }
  },
  computed: {
    applyFilters(){
      switch (true) {
        case this.showFavOnly:
          return this.books.filter(book => book.isFav)
        case this.showUnfavOnly:
          return this.books.filter(book => !book.isFav)
        default:
          return this.books
      }
    }
  }
})

App.mount('#app')