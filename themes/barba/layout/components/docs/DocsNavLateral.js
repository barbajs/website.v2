import { Component } from 'kapla'

export default class DocsNavLateral extends Component {
  load() {
    const subscriber = this.subscribe('docs-nav')

    subscriber.on('link:close', this.close)

    this.delegateClick = 'button'
  }

  init() {
    [].concat(this.$refs.link).forEach(link => {
      link.addEventListener('click', () => {
        this.close()
      })
    })
  }

  onClick(e) {
    e.preventDefault()

    if (this.isOpen()) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.$el.classList.add('is-open')
    document.body.classList.add('prevent-scroll')
    this.emit('docs-nav:open')
  }

  close() {
    this.$el.classList.remove('is-open')
    document.body.classList.remove('prevent-scroll')
    this.emit('docs-nav:close')
  }

  isOpen() {
    return this.$el.classList.contains('is-open')
  }
}
