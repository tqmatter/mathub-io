import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { css } from "@emotion/core";

import "./layout.css"

const IndexPage = () => (
    <Layout>
        <div css={css`
        @media (min-width: 992px) {
            display: grid;
            grid-template-columns: 5% 40% 5% 5% 40% 5%;
        }
        `}>
            <div css={css`
                grid-column-start: 2;
                grid-column-end: 3;
                margin-bottom: 4rem;
            `}>
                <div className="centered">
                    <h2 css={css`margin-bottom: 20px;  color: #3f51b5; `}>Academic Users</h2>
                    <div css={css`text-align: left;`}>
                        <h3>Organic Materials Database</h3>
                        <p css={css`
                                margin-bottom: 20px; @media (min-width: 992px) {min-height: 10rem};
                                `}>The organic materials database is a <b>open access, nonprofit</b>, electronic structure database for 3-dimensional organic crystals, developed and hosted by the Nordic Institute for Theoretical Physics – Nordita. </p>
                        <div className="centered">
                            <a href="https://omdb.diracmaterials.org/" target="blank" rel="noreferrer noopener">
                                <button className="blueButton">Visit the OMDB</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div css={css`
                @media (min-width: 992px) {border-right: 1px solid grey;}
                @media (max-width: 992px) {border-bottom: 1px solid grey;}
                flex-grow: 1;
            `}></div>
            <div css={css`
                grid-column-start: 5;
                grid-column-end: 6;
            `}>
                <div className="centered">
                    <h2 css={css`margin-bottom: 20px; color: #3f51b5;`}> Commercial Users </h2>
                    <div css={css`text-align: left;`}>
                        <h3>Industry Services</h3>
                        <p css={css`margin-bottom: 20px; @media (min-width: 992px) {min-height: 10rem};`}>
                            Our team of physics and machine learning experts can assist your business.
                        </p>
                        <div className="centered">
                            <Link to="contact">
                                <button className="blueButton">Schedule a meeting with us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
