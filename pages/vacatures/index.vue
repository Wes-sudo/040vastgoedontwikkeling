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
                    id: 1,
                    slug: 'vacature-projectontwikkelaar',
                    title: 'Projectontwikkelaar',
                    content: 'Je begeleidt het de hele ontwikkeling, van concept, vergunningsaanvraag tot de realisatie van het project.Je onderhoudt het contact met alle betrokken partijen, van de gemeente, architect, aannemer tot aan de eindgebruiker.',
                },
                {
                    id: 2,
                    slug: 'vacature-stagiaire',
                    title: 'Stagiaire',
                    content: 'Wij zoeken een fulltime stagiaire (m/v) voor minimaal 6 maanden. In deze uitdagende en veelzijdige stage beleef en werk je mee aan alle facetten van het ontwikkelen. Daarnaast krijg je voldoende tijd om aan je opdrachten te werken voor school. Indien de school eist om een onderzoek te uit te voeren tijdens de stage, dan is onze voorkeur om dit in lijn te doen van onze organisatie.',
                },
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