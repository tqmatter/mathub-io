import { Link } from 'gatsby'
import React from 'react'
import { css } from "@emotion/core"


export default () => (
    <div css={css`
                margin: -20px -20px 0 -20px;
                font-family: helvetica, sans-serif !important;
                letter-spacing: 0.1em !important;
                // why do I need this to make it work in chrome?
                & button {
                    letter-spacing: 0.1em !important;
                }
            `}>
        <nav css={
            css`
            background-color: #3f51b5;
            `
        }>
            <div css={
                css`
            width: 90vw;
            margin: auto;
            display: flex;
            `
            }>
                <Link
                    to="/"
                    css={css`
                    text-decoration: none;
                    color: inherit;
                    flex-grow: 1;
                    cursor: default;
                `}>
                    <button color="inherit" className="underline" css={css`
                        @media (min-width:768px) {
                            font-size: 180% !important;
                        }
                        @media (max-width:768px) {
                            font-size: 130% !important;
                        }
                    `}>
                        mathub.io
                    </button>
                </Link>

                <Link
                    to="/about"
                    css={css`
                    text-decoration: none;
                    color: inherit;
                    margin-right: 0.5rem;
                `}>
                    <button color="inherit" className="underline">
                        <span>About</span>
                    </button>
                </Link>

                <Link
                    to="/contact"
                    css={css`
                    text-decoration: none;
                    color: inherit;
                `}>
                    <button color="inherit" className="underline">
                        <span>Contact</span>
                    </button>
                </Link>
            </div>
        </nav >

        <div id="introduction" css={css`
            color: white;
            background-color: #3f51b5;
            margin-bottom: 3rem;
            border-radius: 0 0 50% 50% / 15%;
            padding: 2rem 0 5rem 0;
            `}>
            <div className="contained" css={css`
                margin: auto;
                text-align: center;
                `}>
                <h1 css={css`margin-bottom: 0.5rem; margin-top: 0;`}>The Future of Materials Development<span css={css`color: #FFF874;`}>.</span></h1>

                Machine learning solutions for materials science.
            </div>
        </div>
    </div>
);
