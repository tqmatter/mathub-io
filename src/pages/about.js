import React from 'react'
import Layout from '../components/layout'
import { css } from "@emotion/core";


const About = () => (
    <Layout>
        <div className="contained section">
            <h1 className="centered" css={css`margin-bottom: 1rem;`}> About</h1>

            <p className="centered"><i>Our mission is to accelerate the discovery of functional materials using data science techniques, tailored to the specific needs of our academic and business partners worldwide.</i></p>

            <p>Functional materials are the key to the rapid technological advancements of our time Having the right material at hand has pushed the boundaries of technology, fabrication and thinking over an incredible range of applications from air and space industry, electronics, and nano science to pharmaceuticals.</p>

            <p>We apply and develop individual solutions based on data science and artificial intelligence to foster materials based technological advancements for our clients. Our approach challenges the complex constraints of our time, identifying materials satisfying the specific needs of the application while minimizing the impact on the environment and climate.</p>

            <p>We furthermore stimulate the active exchange between academic institutions and business partners by crosslinking our open access materials databases with the unique services of our business clients and the migration of our developed machine-learning based tools into our academic platform.</p>
        </div>
    </Layout>
)

export default About
