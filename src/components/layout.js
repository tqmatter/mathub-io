import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import SiteMetadata from './sitemetadata'

import "./layout.css"
const Layout = ({ children }) => {
    return <>
        <SiteMetadata />
        <Header />
        {children}
    </>
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
