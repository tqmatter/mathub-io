import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { css } from "@emotion/core";
import Academic from "../components/academic"
import Business from "../components/business"

const IndexPage = () => (
    <Layout>
        <div className="centered" css={css`
        @media (min-width: 992px) {
            display: grid;
            grid-template-columns: 5% 40% 5% 5% 40% 5%;
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
                    <Business />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
