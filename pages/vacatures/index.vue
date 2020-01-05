<template>
    <b-container style="margin-top: 10rem; margin-bottom: 10rem;">
        <b-row>
            <h1>Vacatures</h1>
        </b-row>
        <b-row>
            <b-card
                no-body
                class="overflow-hidden mb-3 article"
                v-on:click="$router.push(`/vacatures/${article.slug}`)"
                v-for="article in news"
                :key="article.id"
            >
                <b-row no-gutters>
                    <b-col>
                        <b-card-body :title="article.title">
                            <b-card-text>{{article.content}}</b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            news: [
                {
                    id: 0,
                    slug: 'vacature-parttime-allround-secretaresse',
                    title: 'Parttime Allround Secretaress',
                    content: 'Wij zoeken een parttime allround secretaresse (v) voor langere periode. In deze uitdagende en veelzijdige functie ben je de rechterhand voor de eigenaar. Je houdt de administratie/boekhouding bij, bent verantwoordelijk voor commerciële activiteiten en doet alle voorkomende werkzaamheden op kantoor zoals Inkoop, HR, IT en website. Opstellen van koopovereenkomsten en intentieverklaringen. Ontvangst van gasten, zoals klanten, beleggers, bouwers, ontwikkelaars en adviseurs op kantoor, alsmede direct contact voor mogelijk lopende zaken. Je bent een echte spin-in-het-web, hebt een pro-actieve houding, bent secuur en kan goed zelfstanding werken. Wij zijn direct en flexibel en verwachten dit ook van jou.',
                },
                {
                    id: 1,
                    slug: 'vacature-projectontwikkelaar',
                    title: 'Projectontwikkelaar',
                    content: 'Je begeleidt het de hele ontwikkeling, van concept, vergunningsaanvraag tot de realisatie van het project.Je onderhoudt het contact met alle betrokken partijen, van de gemeente, architect, aannemer tot aan de eindgebruiker.',
                }
            ]
        }
    }
};
</script>


<style lang="less" scoped>
.article {
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
        box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.2);
    }
}
</style>