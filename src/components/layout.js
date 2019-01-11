import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import SiteMetadata from './sitemetadata'

const Layout = ({ children }) => {
    return <>
        <SiteMetadata />
        <Header />
        {children}
        {/* <footer>
            <div className="contained centered">
                © 2019 Alexander V. Balatsky
            </div>
        </footer> */}
    </>
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
