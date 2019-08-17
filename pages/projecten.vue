<template>
    <b-container style="margin-top: 10rem; margin-bottom: 10rem;">
        <b-row>
            <h1>Projecten</h1>
        </b-row>
        <b-row>
            <b-card no-body class="overflow-hidden mb-3" v-for="project in projects" :key="project.id">
                <b-row no-gutters>
                    <b-col md="5">
                        <b-card-img
                            :src="require(`~/assets/images/${project.images[0]}`)"
                            :alt="project.title"
                            class="rounded-0"
                            style="object-fit:cover;height:100%;"
                        ></b-card-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body :title="project.title">
                            <b-card-text>
                                {{project.content}}
                            </b-card-text>
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
            projects: [
                {
                    id: 0,
                    slug: 'valkenswaard-rijt',
                    title: 'Valkenswaard, Rijt  (in ontwikkeling)',
                    content: 'Samen met de exploitant is 040 vastgoedontwikkeling BV bezig met de plannen om aan de Rijt in Valkenswaard 25-28 zelfstandige zorgappartementen te ontwikkelen van circa 36 m2 met een gezamenlijke woonkamer van circa 73m2, verdeeld over 2 of 3 bouwlagen. Voldoende parkeerplekken en prachtige tuin zullen aanwezig zijn op eigen terrein.',
                    images: [
                        'valkenswaard-rijt-1.png',
                        'valkenswaard-rijt-2.png',
                        'valkenswaard-rijt-3.png',
                        'valkenswaard-rijt-4.png',
                    ]
                },
                {
                    id: 1,
                    slug: 'bladel-europalaan',
                    title: 'Bladel, Europalaan (in ontwikkeling)',
                    content: 'Samen met de exploitant is 040 vastgoedontwikkeling BV bezig met de plannen om aan de Europalaan in Bladel 25 zelfstandige luxe zorgappartementen in het centrum te ontwikkelen van circa 50 m2 met een gezamenlijke woonkamer van circa 100m2, verdeeld over 3 bouwlagen. Voldoende parkeerplekken en prachtige tuin zullen aanwezig zijn op eigen terrein.',
                    images: [
                        'bladel-europalaan-1.jpg',
                    ]
                },
                // {
                //     id: 2,
                //     slug: 'eindhoven-mimosaplein',
                //     title: 'Eindhoven, Mimosaplein (in ontwikkeling)',
                //     content: 'Samen met de ontwikkelaar en exploitant is 040 vastgoedontwikkeling BV bezig met de plannen om aan de Mimosaplein in Eindhoven 38 zelfstandige luxe zorgappartementen in het centrum te ontwikkelen van circa 36 m2 met een gezamenlijke woonkamer van circa 72m2, verdeeld over 3 bouwlagen. Voldoende parkeerplekken en prachtige tuin zullen aanwezig zijn op eigen terrein. Daarnaast een kerk ontwikkeling van 17 appartementen.',
                //     images: [
                //         'eindhoven-mimosaplein-1.jpg',
                //         'eindhoven-mimosaplein-2.jpg',
                //         'eindhoven-mimosaplein-3.jpg',
                //         'eindhoven-mimosaplein-4.jpg',
                //         'eindhoven-mimosaplein-5.jpg',
                //         'eindhoven-mimosaplein-6.jpg',
                //     ]
                // }
                {
                    id: 4,
                    slug: 'eindhoven-24',
                    title: 'Eindhoven (in ontwikkeling)',
                    content: 'Samen met de exploitant is 040 vastgoedontwikkeling BV bezig met de plannen om aan een prominente locatie in Eindhoven 24 zelfstandige luxe zorgappartementen en 2 penthouses te ontwikkelen van circa 50 - 220 m2 met een gezamenlijke woonkamer van circa 150 m2, verdeeld over 4 en 5 bouwlagen. Voldoende parkeerplekken en prachtige tuin zullen aanwezig zijn op eigen terrein.',
                    images: [
                        'eindhoven-24.png',
                    ]
                },
                {
                    id: 5,
                    slug: 'bladel-europalaan',
                    title: 'Nijmegen (in ontwikkeling)',
                    content: 'Samen met de exploitant is 040 vastgoedontwikkeling BV bezig met de plannen om aan een prachtige locatie aan het water in Nijmegen circa 70 zelfstandige luxe zorgappartementen te ontwikkelen van circa 50 m2 met meerdere gezamenlijke ruimtes van circa 300 m2, verdeeld over 4 bouwlagen. Voldoende parkeerplekken en prachtige grote tuin met aan het water zullen aanwezig zijn op eigen terrein.',
                    images: [
                        'nijmegen-1.png',
                    ]
                },
            ]
        }
    }
};
</script>

<style>
</style>
