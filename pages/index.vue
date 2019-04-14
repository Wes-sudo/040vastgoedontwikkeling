<template>
  <div class="index-page">
    <Intro />

    <section>
        <b-container class=wrapper>
          <div class=part>
            <h1>
              Wie zijn wij?
            </h1>
            <p>
              O4O vastgoedontwikkeling is als projectontwikkelaar actief in het ontwikkelen van  projecten in Noord-Brabant en dan voornamelijk  in de regio Eindhoven.
            </p>
            <p>
              De focus van O4O Vastgoedontwikkeling ligt op de  ontwikkeling van vastgoed in de zorgsector: wij zijn de verbindende factor tussen zorg en vastgoed.
            </p>
            <p>
              Wij brengen de juiste partijen samen om het optimale resultaat te bereiken voor onze opdrachtgevers en gebruiken hiervoor onze brede kennis en ruime ervaring.
            </p>
          </div>
          <div class=part>
              <h1>
                Heeft u vragen?
              </h1>
              <p>
                Heeft u vragen of bent u benieuwd naar de mogelijkheden, dan kunt u contact opnemen met ons via info@040vastgoedontwikkeling.nl
              </p>
          </div>

        </b-container>
    </section>
  </div>
</template>

<script>
import Logo2 from "~/components/Logo2.vue";

export default {
  components: {
    Logo2
  }
};
</script>
<style lang="less">
  .index-page {
    h1 {
      color: darken(#a36b14, 5%);
      //border-bottom: 1px solid #ffc107;
    }
    section {
      padding: 3rem 0;
      //padding-bottom: 10rem;
    }

    .wrapper {
      padding: 0 200px;

      .part {
        padding: 2rem;
      }
    }
  }
</style>
