import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import "./layout.css"
import { css } from "@emotion/core";
import { Grid, Button } from '@material-ui/core';

const IndexPage = () => (
    <Layout>
        <Grid container spacing={14}>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
                <div className="centered">
                    <h2 css={css`margin-bottom: 20px;  color: #3f51b5; `}>Academic Users</h2>
                    <div css={css`text-align: left;`}>
                        <h3>Organic Materials Database</h3>
                        <p css={css`margin-bottom: 20px; min-height: 10rem;`}>The organic materials database is an open access electronic structure database for 3-dimensional organic crystals, developed and hosted at the Nordic Institute for Theoretical Physics – Nordita. </p>
                        <div class="centered">
                            <a href="https://omdb.diracmaterials.org/" target="blank" rel="noreferrer noopener">
                                <Button className="blueButton">Visit the OMDB</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={1} css={css`border-right: 1px solid grey;`}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
                <div className="centered">
                    <h2 css={css`margin-bottom: 20px; color: #3f51b5;`}> Comercial Users </h2>
                    <div css={css`text-align: left;`}>
                        <h3>Consultance service</h3>
                        <p css={css`margin-bottom: 20px; min-height: 10rem;`}>
                            Our team of physics and machine learning experts can assist your business.
                        </p>
                        <div class="centered">
                            <Link to="contact">
                                <Button className="blueButton">Schedule a meeting with us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    </Layout>
)

export default IndexPage
