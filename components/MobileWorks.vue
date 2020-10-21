<template>
    <section class="section"> 
        <div class="div-container">
            <div class="columns is-vcentered">
                <div class="column has-text-left">
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile title">Works and Projects</h1>
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile subtitle">プロジェクト</h1>
                </div>
            </div>
            <div class="columns is-vcentered">
                <div class="column">
                    <b-tabs v-model="activeTab" position="is-centered" class="block" >
                        <b-tab-item  label="Latest" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="p in worklatest" :key="p.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${p.link}`" target="_blank"><img :src="`${p.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Works &amp; Projects   <span class="is-size-6 subtitle">プロジェクト</span></p>
                                            <a :href="`${p.link}`" target="_blank"><p class="is-size-6 title" v-html="p.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Latest, <span class="is-size-6 subtitle">   {{p.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Residence" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="r in workresidence" :key="r.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${r.link}`" target="_blank"><img :src="`${r.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Works &amp; Projects   <span class="is-size-6 subtitle">プロジェクト</span></p>
                                            <a :href="`${r.link}`" target="_blank"><p class="is-size-6 title" v-html="r.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Residence, <span class="is-size-6 subtitle">   {{r.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Commercial" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="c in workcommercial" :key="c.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${c.link}`" target="_blank"><img :src="`${c.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Works &amp; Projects   <span class="is-size-6 subtitle">プロジェクト</span></p>
                                            <a :href="`${c.link}`" target="_blank"><p class="is-size-6 title" v-html="c.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Commercial, <span class="is-size-6 subtitle">   {{c.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Japan" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="j in workjapan" :key="j.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${j.link}`" target="_blank"><img :src="`${j.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Works &amp; Projects   <span class="is-size-6 subtitle">プロジェクト</span></p>
                                            <a :href="`${j.link}`" target="_blank"><p class="is-size-6 title" v-html="j.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Japan, <span class="is-size-6 subtitle">   {{j.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                    </b-tabs>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import dayjs from 'dayjs';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'
export default { 
    name : 'mobileworks',
    mounted() {
        this.getWorkslatest(),
        this.getWorksresidence(),
        this.getWorkscommercial(),
        this.getWorksjapan()
    },
    data() {
        return { 
            worklatest: [],
            workresidence: [],
            workcommercial: [],
            workjapan: [],
            activeTab: 0
        }
    },
    methods: {
        async getWorkslatest() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1862&page=1&_embed'
            )
            const worklatest = _.map(data, (p) => {
                const m = _.first(p._embedded['wp:featuredmedia'])
                p.image = m.media_details.sizes.medium_large.source_url
                dayjs(p.modified.split('T')[0]);
                p.date = dayjs().format('MMMM DD, YYYY')
                return p
            })
            console.log(worklatest);
            this.worklatest = data;
        },
        async getWorksresidence() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1861&page=1&_embed'
            )
            const workresidence = _.map(data, (r) => {
                const m = _.first(r._embedded['wp:featuredmedia'])
                r.image = m.source_url
                dayjs(r.modified.split('T')[0]);
                r.date = dayjs().format('MMMM DD, YYYY')
                return r
            })
            console.log(workresidence);
            this.workresidence = data;
        },

        async getWorkscommercial() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1864&page=1&_embed'
            )
            const workcommercial = _.map(data, (c) => {
                const m = _.first(c._embedded['wp:featuredmedia'])
                c.image = m.source_url
                dayjs(c.modified.split('T')[0]);
                c.date = dayjs().format('MMMM DD, YYYY')
                return c
            })
            console.log(workcommercial);
            this.workcommercial = data;
        },

        async getWorksjapan() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1860&page=1&_embed'
            )
            const workjapan = _.map(data, (j) => {
                const m = _.first(j._embedded['wp:featuredmedia'])
                j.image = m.source_url
                dayjs(j.modified.split('T')[0]);
                j.date = dayjs().format('MMMM DD, YYYY')
                return j
            })
            console.log(workjapan);
            this.workjapan = data;
        }
    }
}
</script>
<style scoped>
.div-container{
    margin: 30px 150px;
}
@media only screen and (max-width:1400px) {
    .div-container {
        margin: 0px 100px;
    }
}
@media only screen and (max-width:1100px) {
    .div-container {
        margin: 0px 50px;
    }
}
@media only screen and (max-width:768px) {
    .div-container {
        margin: 0px 0px;
    }
}
</style>