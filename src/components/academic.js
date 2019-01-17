import OmdbLogo from "./omdb-logo"
import React from "react"
import { css } from "@emotion/core"
import Carousel from "../components/carousel"


const Academic = () => (
    <>
        <h1 css={css`margin-bottom: 30px;  color: #3f51b5; `}>Academic Users</h1>
        <div css={css`text-align: left;`}>
            <h3>The Organic Materials Database - OMDB</h3>
            <div css={css`
                display: grid;
                grid-template-columns: 120px auto; 
            `}>
                <OmdbLogo />
                <p css={css`margin-top: 0;`}>The organic materials database is a free and open access electronic structure database for 3-dimensional organic crystals. It provides tools for search queries based on data mining and machine learning techniques. The universal features provided on our web interface facilitate the identification of functional organic materials for a wide-range of applications.</p>
                <a href="https://omdb.mathub.io/" target="blank" rel="noreferrer noopener"
                    css={css`
                        margin-bottom: auto;
                        margin-left: 1rem;
                    `}>
                </a>
            </div>
            <Carousel />
        </div>
    </>
)

export default Academic;