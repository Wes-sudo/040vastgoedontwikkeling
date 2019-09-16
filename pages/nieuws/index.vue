<template>
    <b-container style="margin-top: 10rem; margin-bottom: 10rem;">
        <b-row>
            <h1>Nieuws</h1>
        </b-row>
        <b-row>
            <b-card
                no-body
                class="overflow-hidden mb-3 article"
                v-on:click="$router.push(`/nieuws/${article.slug}`)"
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
                    title: 'Vacature parttime allround secretaress',
                    content: 'Wij zoeken een parttime allround secretaresse (v) voor langere periode. In deze uitdagende en veelzijdige functie ben je de rechterhand voor de eigenaar. Je houdt de administratie/boekhouding bij, bent verantwoordelijk voor commerci&euml;le activiteiten en doet alle voorkomende werkzaamheden op kantoor zoals HR en IT. Je bent een echte spin-in-het-web, hebt een pro-actieve houding, bent secuur en kan goed zelfstanding werken. Wij zijn direct en verwachten dit ook van jou.',
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