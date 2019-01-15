import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Modal from 'react-modal';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            modalIsOpen: false,
            lastTick: (new Date()).getTime()
        }

        this.forwards = this.forwards.bind(this);
        this.backwards = this.backwards.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    toggleModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    }

    componentDidMount() {
        setInterval(() => {
            const tick = (new Date()).getTime();
            if (tick - this.state.lastTick > 5000) {
                if (!this.state.modalIsOpen) {
                    this.forwards()
                }
            }
        }, 15000);
    }

    advance(direction) {
        // We force 200 seconds at least since last transition to avoid bugs
        const tick = (new Date()).getTime();
        this.setState({
            index: this.state.index + direction,
            lastTick: tick
        })
    }

    forwards() {
        this.advance(1)
    }

    backwards() {
        this.advance(-1)
    }


    handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            this.forwards()
        } else if (event.key === "ArrowLeft") {
            this.backwards()
        }
    }

    render() {
        const explanations = {
            "carousel-0": "Band structure and density of states of a material in the OMDB",
            "carousel-1": "Clustering of materials acording to SOAP kernel in the OMDB",
            "carousel-2": "Gap distribution of materials in the OMDB",
        }
        const index = Math.abs(this.state.index) % Object.keys(explanations).length;

        return <StaticQuery

            query={graphql`
                {
                    allFile(filter:{name:{regex:"/carousel*/"}}) {
                    edges {
                        node {
                            name
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_noBase64
                                }
                            }            
                        }
                    }
                    }
                }
            `}

            render={data => {

                const image = data.allFile.edges[index].node;

                return <div css={css`
                    width: 100%;
                    margin-top: 1rem;
                `} onKeyDown={this.handleKeyDown}>
                    <div css={css`
                        width:100%;
                        display: grid;
                        grid-template-columns: 10% auto 10%;
                    `}>
                        <button className="slider-button" onClick={this.backwards}>
                            arrow_left
                    </button>
                        <div css={css`
                        position: relative;
                        height: 100%;
                    `} onClick={this.toggleModal} >
                            {/* disable fade in, creates bugs in carrousel */}
                            <Img css={css`
                        & img {
                            min-width: 50px;
                        }
                    `} fluid={image.childImageSharp.fluid} fadeIn={false} />

                        </div>
                        <button className="slider-button" onClick={this.forwards}>
                            arrow_right
                    </button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.toggleModal}
                        >
                            <div className="centered"><h2>{explanations[image.name]}</h2></div>
                            <div css={css`
                                display: grid;
                                grid-template-columns: 10% 80% 10%;
                                position: relative;
                                height: 100%;
                            `}>
                                <button className="slider-button" onClick={this.backwards}>
                                    arrow_left
                                </button>
                                <div css={css`
                                    margin: auto;
                                    width: 50vw;
                                    max-width: 800px;
                                    max-height: 600px;
                                `}>
                                    <Img fluid={image.childImageSharp.fluid} fadeIn={false} />
                                </div>
                                <button className="slider-button" onClick={this.forwards}>
                                    arrow_right
                                </button>
                            </div>
                        </Modal>
                    </div >
                </div>
            }}
        />
    }
}