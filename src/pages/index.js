import React from 'react'

import Layout from '../components/layout'
import { css } from "@emotion/core";
import Academic from "../components/academic"
import Business from "../components/business"

import { Link } from "gatsby"


const IndexPage = () => (
    <Layout>
        <div className="centered" css={css`
        @media (min-width: 992px) {
            display: grid;
            grid-template-columns: 5% 40% 5% 5% 40% 5%;
            grid-template-rows: auto auto;
        }
        max-width: 1920px;
        `}>
            <div css={css`
                    grid-column-start: 2;
                    grid-column-end: 3;
                    margin-bottom: 4rem;
                `}>
                <div id="academic" className="centered">
                    <Academic />
                </div>
            </div>
            <div className="centered" css={css`
                    grid-column-start: 2;
                    grid-column-end: 3;
                    @media (min-width: 992px) {
                        grid-row-start: 2
                    }`}
            >
                <a href="https://omdb.mathub.io/" target="blank" rel="noreferrer noopener">
                    <button className="blueButton">Visit the OMDB</button>
                </a>
            </div>
            <div css={css`
                    @media (min-width: 992px) {border-right: 1px solid grey;}
                    @media (max-width: 992px) {border-bottom: 1px solid grey;}
                    @media (min-width: 992px) {
                        grid-row-start: 1;
                        grid-row-end: 3;
                    }
                    grid-column-start: 3;
                    grid-column-end: 4;
                    flex-grow: 1;
                `}>
            </div>
            <div css={css`
                    grid-column-start: 5;
                    grid-column-end: 6;
                `}>
                <div className="centered">
                    <Business />
                </div>
            </div>

            <div className="centered" css={css`
                grid-column-start: 5;
                grid-column-end: 6;
                @media (min-width: 992px) {
                    grid-row-start: 2
                }`}
            >
                <Link to="contact">
                    <button className="blueButton">Schedule a meeting with us</button>
                </Link>
            </div>
        </div>
    </Layout>
)

export default IndexPage
