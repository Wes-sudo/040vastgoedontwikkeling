<template>
  <b-container style="margin-top: 7rem; margin-bottom: 5rem;">
    <b-row>
      <h1 v-html="article.title"></h1>
      <br />
      <div v-html="article.content"></div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      article: {
        content: ''
      },
      articles: [
        {
          slug: 'vacature-projectontwikkelaar',
          title: 'Vacature Projectontwikkelaar',
          content: '<p>040 Vastgoedontwikkeling is een snelgroeiende (zorg)ontwikkelaar in hartje Eindhoven met vastgoedprojecten door geheel Nederland.<br />Door de sterke groei in het aantal projecten hebben wij een functie per direct openstaan voor een Projectontwikkelaar.<br /><br /><strong>Wat ga je doen?</strong><br />Je begeleidt het de hele ontwikkeling, van concept, vergunningsaanvraag tot de realisatie van het project.<br />Je onderhoudt het contact met alle betrokken partijen, van de gemeente, architect, aannemer tot aan de eindgebruiker.<br /><br />Denk hierbij aan de volgende taken:<br />- Locaties zoeken welke geschikt zijn voor zorgontwikkeling<br />- Analyseren van de ontwikkelmogelijkheden<br />- Haalbaarheidsstudies uitvoeren<br />- Overleg voeren met overheden en gemeenten<br />- Begeleiden schetsontwerp met architecten tot aan definitief ontwerp<br />- Voorbereiden en indienen van bestemmingsplan en omgevingsvergunning<br />- Het aansturen van het team en contact houden met alle betrokken partijen<br />- Bewaking van het proces en de begroting<br />- Zorgdragen voor de realisatie van het project</p><p><strong>Wat neem je mee?</strong><br />Je hebt een technische opleiding, richting bouwkunde, op academisch niveau afgerond. Je beschikt reeds over enkele jaren werkervaring al projectontwikkelaar.<br />Kennis van de zorgbranche is niet noodzakelijk, maar wel een pr&eacute;. Wij zoeken iemand die leiding kan geven aan twee junior ontwikkelaars en een stagiaire.<br />Je bent communicatief vaardig, zowel schriftelijk als mondeling (NL/UK). Je kan werken in een klein team en bent direct en flexibel.<br />Er worden veel locaties aangeboden, belangrijk hierbij is dat je snel kan rekenen/schakelen: wat is interessant en wat niet.<br /><br /><strong>Wat bieden we jou?</strong><br />Wij bieden een leuke, gevarieerde en uitdagende baan in hartje Eindhoven, in een energieke werkomgeving.<br />Voor deze functie bieden wij een passende salaris.<br /><br /><strong>Meer informatie?</strong><br />Is dit de uitdagende aan die jij zoekt?<br />Solliciteer dan op deze functie door je CV en motivatie, aangevuld met een recente foto, te mailen naar <a href="mailto:info@040vastgoedontwikkeling.nl">info@040vastgoedontwikkeling.nl</a>.</p>'
        },
        {
          slug: 'vacature-stagiaire',
          title: 'Vacature Stagiaire',
          content: '<p>04O vastgoedontwikkeling is een snelgroeiende (zorg)ontwikkelaar in hartje Eindhoven met vastgoedprojecten door geheel Nederland.</p><p><strong>Wat ga je doen?</strong><br />Wij zoeken een fulltime stagiaire (m/v) voor minimaal 6 maanden. In deze uitdagende en veelzijdige stage beleef en werk je mee aan alle facetten van het ontwikkelen. Daarnaast krijg je voldoende tijd om aan je opdrachten te werken voor school. Indien de school eist om een onderzoek te uit te voeren tijdens de stage, dan is onze voorkeur om dit in lijn te doen van onze organisatie.</p><p>Je doet alle voorkomende werkzaamheden op kantoor. Je hebt een pro-actieve houding en bent secuur. Het betreft een functie voor minimaal 8 uur en maximaal 34 uur per week.</p><p><strong>Wat neem je mee?</strong><br />Je beschikt over HBO werk -en denkniveau. Je hebt uitstekende schriftelijke (NL/UK) en mondelinge communicatieve vaardigheden, bent discreet en betrouwbaar en weet prioriteiten te stellen. Wij zoeken iemand die zelfstandig kan werken in een klein, informeel team dat bestaat uit de eigenaar, 1 senior ontwikkelaar, 2 junior ontwikkelaars en een secretaresse.</p><p><strong>Wat bieden wij jou?</strong><br />Wij bieden een leuke, gevarieerde en uitdagende stage in het hartje van Eindhoven, in een energieke werkomgeving met een marktconforme stagevergoeding.</p><p><strong>Meer informatie?</strong><br />Is dit de uitdagende stage die jij zoekt? Solliciteer dan op deze functie door je CV en motivatie te mailen naar <a href="mailto:info@040vastgoedontwikkeling.nl">info@040vastgoedontwikkeling.nl</a>.</p>'
        }
      ]
    }
  },

  mounted() {
    this.article = this.articles.find(article => article.slug === this.$route.params.article);
  }
}
</script>

<style>
</style>