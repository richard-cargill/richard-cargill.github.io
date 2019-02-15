import React from 'react'
import { Link } from 'gatsby'
import Bio from '../components/Bio'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="logo">
          <Link
            className="no-underline"
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="logo">
          <Link
            className="no-underline"
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
        <header className="header">
          {header}
          <Link className="no-underline sans-serif" to={`/`}>All posts</Link>
        </header>
        {children}
        <Bio />
        <footer>
          <small>© {new Date().getFullYear()} - Built with ❤</small>
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout
