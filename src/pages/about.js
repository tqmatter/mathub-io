import React from 'react'

import Layout from '../components/layout'
import "./layout.css"

const About = () => (
    <Layout>
        <div className="contained">
            <h2>Who are we?</h2>
            <p>
                Mathub is a startup founded by members of the Condensed Matter group at the physics institute NORDITA.
            </p>
            <h2>What is our motivation?</h2>
            <p>
                We want to provide solutions for academics and industries in the fields of Materials Informatics and Machine Learning.
            </p>

        </div>
    </Layout>
)

export default About
