<template>
  <footer id="footer">
      <section class="footer-gradient">
          <b-container class="pb-4">
              <b-row>
                  <b-col class="">
                    <header>
                      Navigatie
                    </header>
                      <ul>
                          <li><a href='/'>Home</a></li>
                          <li><a href='/team'>Werkwijze</a></li>
                          <li><a href='/vacatures'>Projecten</a></li>
                          <li><a href='/contact'>Contact</a></li>
                      </ul>
                  </b-col>
                  <b-col>
                      <header>
                        E-mail
                      </header>
                      <span>Heeft u vragen?</span><br/>
                      <span>Stuur ons direct een e-mail!</span><br/><br/>
                      <p class="h6">
                          <a href="mailto:info@040vastgoedontwikkeling.nl"><fa icon="envelope" /> info@040vo.nl</a>
                      </p>
                  </b-col>
                  <b-col>
                    <header>
                        Telefoon
                      </header>
                      <span>Liever bellen?</span><br/>
                      <span>We zijn telefonisch bereikbaar!</span><br/><br/>
                      <p class="h6">
                          <a href="tel:+31850027569"><fa icon="phone" /> 085 002 7569</a>
                      </p>
                  </b-col>
                  <b-col>
                    <header>
                        Adres
                      </header>
                      <span>Zwembadweg 12</span><br/>
                      <span>5611KS Eindhoven</span><br/><br/>
                      <p class="h6">
                          <a href="https://goo.gl/maps/2y3K33E4vyq" target="_blank">
                              <fa icon="map-marker-alt" /> Open in Google Maps
                          </a>
                      </p>
                  </b-col> 
              </b-row>
          </b-container>
      </section>
      <!--<b-container class='mt-3 mb-3 underfooter d-none d-sm-flex'>
          <span>040vastgoedontwikkeling.nl &copy; 2019 All rights reserved.</span>
      </b-container>-->
      <div class="subfooter">
        O4O Vastgoedontwikkeling B.V.
      </div>
  </footer>
</template>
<style lang="less">
  #footer {
    padding-top: 4rem;
    background-color: black;
    color: rgba(255, 255, 255, .5);

    .footer-gradient {
      display: flex;
      // box-shadow:  inset 0px 11px 8px -10px rgba(0,0,0, 0.6);
      
      
      padding: 1rem 0 1rem 0;
      box-sizing: border-box;
      color: white;
      font-size: 1rem;
      
      .copy-text {
          margin-top: 30px;
      }
      
      span, b{
          color: white;
      }
      .span-orange{
          color:#f9ae40;
          img{
              margin-right: 6px;
          }
      }
      ul { 
          padding-left: 0;
      }

      p {
        a, a:hover {
          color: #ffc107;
        }
      }

      li {
          list-style: none;
          a{
              font-size: 1rem;
              color: white;
              
              &:hover{
                  color: #f9ae40;
              }
          }
      }
    }

    header {
      color: lighten(#8c5c11, 5%);//darken(#ffc107, 30%);//rgba(255, 255, 255, .7);
      font-weight: bold;
    }

    .subfooter {
      font-size: 1.5rem;
      padding: 1rem;
      margin-top: 2rem;
      text-align: center;
      border-top: 1px solid darken(#ad9b77, 40%);
    }

    .underfooter {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 15px;
        }
  }
</style>
