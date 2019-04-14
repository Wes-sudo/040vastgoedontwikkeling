<template>
    <div class="intro" :class="[stateClass, scrollClass]" v-scroll="handleScroll">
        <div class="embed-responsive embed-responsive-16by9">
            <video loop muted autoplay poster="img/videoframe.jpg" class="embed-responsive-item">
                <source src="~/assets/video.mp4" type="video/mp4">
            </video>
        </div>

        <div class="content">

            <div class="d-flex flex-row">
                <div class="logo-container">
                    <img src="~/assets/logo.png" ref=logoSource :style="sourceStyles" class="logo">
                </div>
                <div class="text align-self-center">
                    <div class="slogan">Keep your <b>business</b> running</div>
                    <div class="subslogan">While you focus on the important things</div>
                    <!--<div style="padding: 20px 0">
                      <b-button variant="success" size="lg">Learn more</b-button>
                    </div>-->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    function isScrolling() {
        return typeof window !== 'undefined' ? window.scrollY > 0 : false;
    }

    export default {
        data() {
            return {
                state: -1,
                scrolling: isScrolling(),
                sourceStyles: {}
            }
        },

        computed: {
            stateClass() {
                return 'state-' + this.state;
            },

            scrollClass() {
                return this.scrolling ? 'scrolling' : '';
            },
        },

        mounted() {
            var self = this;
            setInterval(() => {
                self.state = Math.min(self.state + 1, 2);
            }, 1000);

            console.log(this.$refs.logoSource)
            console.log(this.$refs.logoSource.getBoundingClientRect())
        },

        methods: {
            handleScroll() {

                if (this.state === 2) {


                    if (!this.scrolling && isScrolling()) {

                        var pos = this.$refs.logoSource.getBoundingClientRect();


                        this.sourceStyles = {
                            position: 'fixed',
                            top: pos.top + 'px',
                            left: pos.left + 'px',

                        };

                        requestAnimationFrame(() => {

                            var targetPos = document.querySelector('#menu .logo').getBoundingClientRect();


                            this.sourceStyles = {
                                transition: 'all .5s ease',
                                position: 'fixed',
                                top: (pos.top + (targetPos.top - pos.top)) + 'px',
                                left: (pos.left + (targetPos.left - pos.left)) + 'px',
                                width: 60 + 'px',
                                height: 60 + 'px',
                                animation: 'lift .8s ease'
                            };

                            setTimeout(() => {
                                this.sourceStyles = {
                                    opacity: 0,
                                }
                            }, 800)
                        })
                    }

                    if (this.scrolling && !isScrolling()) {
                        this.sourceStyles = {};
                    }

                    this.scrolling = isScrolling();

                }
            }
        }

    };
</script>
<style lang="less">

    .intro {
        height: 100vh;
        overflow: hidden;

        video {
            filter: brightness(1.1);
        }

        .content {
            position: absolute;
            background-color: rgba(0, 0, 0, .9);

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;

            .text {
                max-width: 0;
                overflow: hidden;
                white-space: nowrap;
                padding-left: 2rem;

                //font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                display: block;

                font-size: 2rem;
                color: #526488;

                letter-spacing: 1px;

                .slogan {
                    color: #35495e;

                    font-size: 3rem;
                    opacity: 0;
                }

                .subslogan {
                    opacity: 0;
                }
            }
        }

        .logo-container {
            width: 200px;
            height: 200px;
            content: ' ';
        }

        &.state--1 {
            .content > div {
                opacity: 0;
            }
        }

        &.state-0 .content {

            & > div {
                transform: opacity .5s;
                opacity: 1;
            }


            img {
                animation: bounce 1s;
                transform: scale(1);
            }

            .text {
                max-width: 0;
            }
        }

        &.state-1 .content {

            img {
                transform: scale(1);
            }

            .text {
                transition: max-width 1s cubic-bezier(.87,-.41,.19,1.44);
                max-width: 800px;
            }
        }

        &.state-2 .content {

            img {
                transform: scale(1);
            }

            .text {
                max-width: 800px;

                .slogan {
                    transition: opacity .3s ease-in-out;
                    opacity: 1;
                }

                .subslogan {
                    transition: opacity .3s .5s ease-in-out;
                    opacity: 1;
                }
            }


        }

        .text {
            transition: opacity .5s ease-in-out;
            opacity: 1;
        }

        &.scrolling {
            .text {
                transition: opacity .5s ease-in-out;
                opacity: 0;
            }
        }
    }

    @f: 1/.85;

    @keyframes bounce {

        0% { transform: scale(1.1 * @f); opacity: 1 }
        50% { transform: scale(1.6 * @f); opacity: .7; }
        60% { transform: scale(0.6 * @f); opacity: 1 }
        80% { transform: scale(0.95 * @f) }
        100% { transform: scale(0.85 * @f) }
    }

    @keyframes lift {

        0% { transform: scale(1); opacity: 1 }
        20% { transform: scale(2); opacity: .7; }
        50% { transform: scale(2.5); opacity: .7; }
        80% { transform: scale(2); opacity: .7; }
        90% { transform: scale(0.75); opacity: 1 }
        100% { transform: scale(1) }
    }
</style>
