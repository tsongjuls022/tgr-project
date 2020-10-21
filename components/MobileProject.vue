<template>
    <section class="div-section"> 
        <div class="div-container">
            <div class="columns is-vcentered">
                <div class="column has-text-left ">
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile title">Our Works &amp; Projects</h1>
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile subtitle">デザイン・アンド・リノベーション</h1>
                </div>
            </div>
            <div class="columns is-vcentered is-multiline">
                <div class="column is-4-desktop is-6-tablet is-12-mobile" v-for="p in projects" :key="p.id">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <a :href="`${p.link}`" target="_blank"><img :src="`${p.image}`" ></a>
                            </figure>
                        </div>
                        <div class="card-content" style="height : 250px;">
                            <p class="is-size-6 subtitle">Latest Project   <span class="is-size-6 subtitle">プロジェクト</span></p>
                            <a :href="`${p.link}`" target="_blank"><p class="is-size-5 title" v-html="p.title.rendered"></p></a>
                            <div v-for="c in categories" :key="c.id"><p class="is-size-6 subtitle" v-if="c.id == p.categories[0]">{{c.name}}<span class="is-size-6 subtitle">   {{p.date}}</span></p></div>
                            <br>
                            <a  class="is-size-6 title" style="text-decoration: underline;" href="https://tgr.com.ph/interior-design-and-build-in-makati/" target="_blank">More Project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="projects.length" v-observe-visibility="showBottom"></div>
            <div class="columns is-vcentered">
                <div class="column has-text-left ">
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile title">Our Latest Stories</h1>
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile subtitle">ストーリー</h1>
                </div>
            </div>
            <div class="columns is-vcentered is-multiline">
                <div class="column is-4-desktop is-6-tablet is-12-mobile" v-for="a in articles" :key="a.id">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <a :href="`${a.link}`" target="_blank"><img :src="`${a.image}`" ></a>
                            </figure>
                        </div>
                        <div class="card-content" style="height : 250px;">
                            <p class="is-size-6 subtitle">Latest Story   <span class="is-size-6 subtitle">ストーリー</span></p>
                            <a :href="`${a.link}`" target="_blank"><p class="is-size-5 title" v-html="a.title.rendered"></p></a>
                            <div v-for="c in categories" :key="c.id"><p class="is-size-6 subtitle" v-if="c.id == a.categories[0]">{{c.name}}<span class="is-size-6 subtitle">   {{a.date}}</span></p></div>
                            <br>
                            <a  class="is-size-6 title" style="text-decoration: underline;" href="https://tgr.com.ph/room-design-ideas-interior-decor-blog/" target="_blank">More Story</a>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="columns is-vcentered">
                <div class="column has-text-left ">
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile title">Japanese Renovation</h1>
                    <h1 class="is-size-1-desktop is-size-3-tablet is-size-6-mobile subtitle">日本式リノベーション</h1>
                </div>
            </div>
            <div class="columns is-vcentered is-multiline">
                <div class="column is-6-desktop is-6-tablet is-12-mobile">
                    <div class="card">
                        <div class="card-image">
                                <iframe style="width : 100%; height : 350px;" src="https://www.youtube.com/embed/kuMPId-u1WQ" allowfullscreen></iframe>
                        </div>
                        <div class="card-content" style="height : 250px;">
                            <p class="is-size-6 subtitle">Featured Video   <span class="is-size-6 subtitle">注目のビデオ</span></p>
                            <a href="https://www.youtube.com/watch?v=kuMPId-u1WQ" target="_blank"><p class="is-size-5 title">Japanese Luxury Interior Design Build</p></a>
                            <p class="is-size-6 subtitle">Video<span class="is-size-6 subtitle">   July 20, 2020</span></p>
                            <br>
                            <a class="is-size-6 title" style="text-decoration: underline;" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                        </div>
                    </div>
                </div>
                <div class="column is-6-desktop is-6-tablet is-12-mobile">
                    <div class="card">
                        <div class="card-image">
                                <iframe style="width : 100%; height : 350px;" src="https://www.youtube.com/embed/SWmzXvsBfsI" allowfullscreen></iframe>
                        </div>
                        <div class="card-content" style="height : 250px;">
                            <p class="is-size-6 subtitle">Featured Video   <span class="is-size-6 subtitle">注目のビデオ</span></p>
                            <a href="https://www.youtube.com/watch?v=SWmzXvsBfsI" target="_blank"><p class="is-size-5 title">Japanese Luxury Interior Design Build</p></a>
                            <p class="is-size-6 subtitle">Video<span class="is-size-6 subtitle">   July 20, 2020</span></p>
                            <br>
                            <a class="is-size-6 title" style="text-decoration: underline;" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>
<script>
import dayjs from 'dayjs';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

export default { 
    name : 'mobileproject',
    mounted() {
        this.getProjects(),
        this.getStories(),
        this.getCategories()
    },
    data() {
        return { 
            projects: [],
            articles: [],
            categories: [],
            projectdates: [],
            page : 1
        }
    },
    methods: {
        async getProjects() {
            const { data } = await this.$axios.get(
                `https://tgr.com.ph/wp-json/wp/v2/posts?categories=1862&page=${this.page}&_embed`
            )
            const projects = _.map(data, (p) => {
                const m = _.first(p._embedded['wp:featuredmedia'])
                p.image = m.source_url
                dayjs(p.modified.split('T')[0]);
                p.date = dayjs().format('MMMM DD, YYYY')
                return p
            })

            console.log(projects);
            this.projects = _.concat(this.projects, projects)
        },
        async getStories(page) {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1863&page=1&_embed'
            )
            const articles = _.map(data, (a) => {
                const mm = _.first(a._embedded['wp:featuredmedia'])
                a.image = mm.source_url
                dayjs(a.modified.split('T')[0]);
                a.date = dayjs().format('MMMM DD, YYYY')
                return a
            })
            // console.log(articles);
            this.articles = data;
        },
        async getCategories() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/categories'
            )
            const categories = _.map(data, (c) => {
                return c
            })
            // console.log(categories);
            this.categories = data;
        },
        showBottom(isVisible) {
            if(!isVisible){ return }
            this.page++;
            this.getProjects();
        }
    }
}
</script>
<style scoped>
.div-section {
    padding: 3rem 1.5rem;
}
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
