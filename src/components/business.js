import React from "react"
import { css } from "@emotion/core"

const Business = () => (
    <>
        <h1 css={css`margin-bottom: 30px; color: #3f51b5;`}> Business Partners </h1>
        <div css={css`text-align: left;`}>
            <div>

                <h3>Materials Discovery</h3>

                We provide tailored solutions and consultancy services for industrial partners based on data science and artificial intelligence to accelerate the discovery of functional materials fostering the technological advancement of your products.

                <h3>Materials Marketplace</h3>

                We provide a community based marketplace where functional materials are identified based on their properties. This novel approach helps to foster an application based communication between customers and materials supplier.

                <h3>Materials Information</h3>

                We provide a platform for publishers to link professional literature with our academic materials databases. Our network helps to connect information and publisher products with the specific needs of researchers based on functional materials properties.


            </div>
        </div>
    </>
)

export default Business;