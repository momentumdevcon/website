import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
