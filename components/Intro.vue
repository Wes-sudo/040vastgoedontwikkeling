<template>
    <div class="intro" :class="[stateClass, scrollClass]" v-scroll="handleScroll">
        <div class="embed-responsive embed-responsive-16by9">
            <video loop muted autoplay poster="img/videoframe.jpg" class="embed-responsive-item">
                <source src="~/assets/video.mp4" type="video/mp4">
            </video>
        </div>



        <div class="content">
          <b-container>
              <stick-transition scale :duration="800" :transition-duration="500" easing="ease" name="move" ref="stickTransition">
                  <img src="~/assets/logo.png" class="logo" style="opacity: .75;">
              </stick-transition>
              <div class="text align-self-center">
                  <div class="slogan">Vastgoedontwikkeling</div>
                  <div class="subslogan">De verbindende factor tussen zorg en vastgoed</div>
                  <div class="call-to-action" hidden>
                    <b-button variant="success" size="lg">Learn more</b-button>
                  </div>
              </div>
            </b-container>
          </div>


    </div>
</template>

<script>
    function isScrollingNext() {
        return typeof window !== 'undefined' ? window.scrollY > 0 : false;
    }

    export default {
        data() {
            return {
                state: -1,
                isScrolling: isScrollingNext(),
            }
        },

        computed: {
            stateClass() {
                return 'state-' + this.state;
            },

            scrollClass() {
                return this.isScrolling ? 'scrolling' : '';
            },
        },

        mounted() {
            var self = this;
            setInterval(() => {
                self.state = Math.min(self.state + 1, 2);
            }, 1000);
        },

        methods: {
            handleScroll() {

                if (!this.isScrolling && isScrollingNext()) {
                    this.isScrolling = true;

                    this.startTransition();
                }

                if (this.isScrolling && !isScrollingNext()) {
                    this.isScrolling = false;

                    this.$refs.stickTransition.reset();


                }
            },

            startTransition() {

                this.$refs.stickTransition.doEnter(
                    document.querySelector('#menu .logo')
                );
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
            flex-direction: column;
            text-align: center;

            .container {

              display: flex;
              justify-content: left;
              align-items: center;
              text-align: left;



              .text {
                  //max-width: 0;
                  position: relative;
                  white-space: nowrap;
                  padding-left: 2rem;

                  //font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                  font-family: 'ProximaSoftMark';
                  display: block;

                  font-size: 1.75rem;
                  color: #fff - #526488;
                  transition: transform .2s ease;
                  letter-spacing: 1px;

                  .slogan {
                      color: #fff - #35495e;

                      font-size: 3rem;
                      //opacity: 0;
                  }

                  .subslogan {
                      //opacity: 0;
                  }

                  .call-to-action {
                    position: absolute;
                    bottom: -4rem;
                  }
              }
            }

        }


        .source .logo {
            width: 200px;
            height: 200px;
            animation: bounce 1s 1s;
        }

        .move-enter .source {
            opacity: 1;
            transition: opacity 0s .8s ease;
        }

        .move-enter-to .source {
            opacity: 0;
        }

        .move-enter-to .clone .logo {
            animation: lift .8s;
        }

        .move-leave-to .source {
            transition: none;
            opacity: 0;
        }

        &.scrolling {


          .text {
              //transition: transform .2s ease;
              //transform: translateX(-232px);
          }

          .source .logo {
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
