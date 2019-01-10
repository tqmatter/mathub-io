import { Link } from 'gatsby'
import React from 'react'
import { css } from "@emotion/core"

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"


const Header = (props) => {
    return <div css={css`
                &:hover #slidding-logo {
                    left: 0
                }
            `}>
        < AppBar position="static">
            <Toolbar css={
                css`
            width: 90vw;
            margin: auto;
            `
            }>
                <Link
                    to="/"
                    css={css`
                    text-decoration: none;
                    color: inherit;
                    flex-grow: 1;
                `}>
                    <Button color="inherit" className="underline">
                        <h1
                            css={css`
                                background-color: orange;
                                padding: 2px;
                                color: #3f51b5;
                            `}
                        >MH</h1>
                        <span
                            css={css`
                                padding-left:1.5rem;
                                overflow: hidden;
                            `}>
                            <h1 id="slidding-logo"
                                css={css`
                                position: relative;
                                left: -150px;
                                transition: left 1s;
                            `}>Mathub</h1>
                        </span>
                    </Button>
                </Link>

                <Link
                    to="/about"
                    css={css`
                    text-decoration: none;
                    color: inherit;
                    margin-right: 2rem;
                `}>
                    <Button color="inherit" className="underline">
                        <h2>About</h2>
                    </Button>
                </Link>

                <Link
                    to="/contact"
                    css={css`
                    text-decoration: none;
                    color: inherit;
                `}>
                    <Button color="inherit" className="underline">
                        <h2>Contact</h2>
                    </Button>
                </Link>
            </Toolbar>
        </AppBar >

        <div id="introduction" className="section" css={css`
            color: white;
            background-color: #3f51b5;
            margin-bottom: 3rem;
        `}>
            <div className="contained" css={css`
                margin: auto;
                text-align: center;
            `}>
                <h1>The Future of Materials Development<span css={css`color: orange;`}>.</span></h1>

                Machine learning solutions for materials science.
            </div>
        </div>
    </div>
}

export default Header

