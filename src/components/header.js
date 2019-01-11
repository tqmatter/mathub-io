import { Link } from 'gatsby'
import React from 'react'
import { css } from "@emotion/core"

export default () => (
    <div css={css`
                margin: -20px -20px 0 -20px;
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
                `}>
                    <button color="inherit" className="underline">
                        <span
                            css={css`
                                background-color: #FFF874;
                                padding: 2px;
                                margin-right: 1rem;
                                color: #3f51b5;
                                display: inline-block;
                            `}
                        >MH</span>
                        <span id="appearing-logo"
                        >mathub.io</span>
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

        <div id="introduction" className="section" css={css`
            color: white;
            background-color: #3f51b5;
            margin-bottom: 3rem;
            `}>
            <div className="contained" css={css`
                margin: auto;
                text-align: center;
                `}>
                <h1>The Future of Materials Development<span css={css`color: #FFF874;`}>.</span></h1>

                Machine learning solutions for materials science.
            </div>
        </div>
    </div>
);
