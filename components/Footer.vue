<template>
  <div id="footer">
    <b-container>
      <b-row>


        <b-col>
          <header>
            Contactgegevens
          </header>
          Paradijslaan 157<br>
          5611 KM Eindhoven<br>
          Tel. 085 002 7569<br>
          info@040vastgoedontwikkeling.nl<br>
        </b-col>
        <b-col>
          <header>
            Bedrijfsgegevens
          </header>
          KVK 59102535<br>
          BTW 1843276532958<br>
          Nederland<br>
          Eindhoven
        </b-col>
        <b-col>
          <header>
            Navigatie
          </header>
          Home<br>
          Werkwijze<br>
          Projecten<br>
          Contact<br>
        </b-col>
        <b-col>
          <div style="padding: 0 4rem;">
            <img src="~/assets/logo.png" class="logo" style="opacity: .5; width: 100%">
          </div>

        </b-col>
      </b-row>
      <div class="subfooter">
        O4O Vastgoedontwikkeling B.V.
      </div>
    </b-container>

  </div>
</template>
<style lang="less">
  #footer {
    padding-top: 4rem;
    background-color: black;
    color: rgba(255, 255, 255, .5);

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
  }
</style>
