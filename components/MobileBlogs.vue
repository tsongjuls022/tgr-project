<template>
<div>
    <br><br>
    <table style="width : 100%; margin-top : 10px;">
        <tbody>
            <tr>
                <td style="text-align : left;"><p class="is-size-3-desktop is-size-3-tablet is-size-6-mobile title pl-3">Interior Design Blog</p></td>
                <td style="text-align : right;"><a href="https://tgr.com.ph/ja/" target="_blank"><p class="is-size-3-desktop is-size-3-tablet is-size-6-mobile subtitle pr-3">View in Japanese</p></a></td>
            </tr>
            <tr>
                <td style="text-align : left;"><p class="is-size-3-desktop is-size-3-tablet is-size-6-mobile subtitle pl-3">ブログ</p></td>
                <td style="text-align : right;"></td>
            </tr>
        </tbody>
    </table>
    <div>
        <img src="/blog-banner.jpg" alt="" class="blog-banner">
        <div style="padding : 5px 5px 5px 5px;">
            <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile title pl-3">Coffee and Culture: This Starbucks in Japan Pays Tribute to Traditional Japanese Architecture</p>
            <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile subtitle pl-3">Food &amp; Beverage Story &nbsp;&nbsp;&nbsp;July 20, 2020</p>
        </div>
    </div>
    <section class="div-section">
        <div class="div-container">
            <div class="columns is-vcentered">
                <div class="column">
                    <b-tabs v-model="activeTab" position="is-centered" class="block" >
                        <b-tab-item  label="Latest" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="l in bloglatest" :key="l.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${l.link}`" target="_blank"><img :src="`${l.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${l.link}`" target="_blank"><p class="is-size-6 title" v-html="l.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Latest, <span class="is-size-6 subtitle">   {{l.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Popular" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="p in blogpopular" :key="p.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${p.link}`" target="_blank"><img :src="`${p.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${p.link}`" target="_blank"><p class="is-size-6 title" v-html="p.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Popular, <span class="is-size-6 subtitle">   {{p.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Story" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="s in blogstory" :key="s.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${s.link}`" target="_blank"><img :src="`${s.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${s.link}`" target="_blank"><p class="is-size-6 title" v-html="s.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Story, <span class="is-size-6 subtitle">   {{s.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Japan" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="j in blogjapan" :key="j.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${j.link}`" target="_blank"><img :src="`${j.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${j.link}`" target="_blank"><p class="is-size-6 title" v-html="j.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Japan, <span class="is-size-6 subtitle">   {{j.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Food" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="f in blogfood" :key="f.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${f.link}`" target="_blank"><img :src="`${f.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${f.link}`" target="_blank"><p class="is-size-6 title" v-html="f.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Food, <span class="is-size-6 subtitle">   {{f.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Design" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="d in blogdesign" :key="d.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${d.link}`" target="_blank"><img :src="`${d.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${d.link}`" target="_blank"><p class="is-size-6 title" v-html="d.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Design, <span class="is-size-6 subtitle">   {{d.date}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                        <b-tab-item  label="Green" >
                            <div class="columns is-vcentered is-multiline is-gapless">
                                <div class="column is-4-desktop is-6-tablet" v-for="g in bloggreen" :key="g.id">
                                    <div class="card" style="-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <a :href="`${g.link}`" target="_blank"><img :src="`${g.image}`" ></a>
                                            </figure>
                                        </div>
                                        <div class="card-content" style="height : 220px; background-color : #e8e6e6;">
                                            <p class="is-size-6 subtitle">Interior Design Blog   <span class="is-size-6 subtitle">ブログ</span></p>
                                            <a :href="`${g.link}`" target="_blank"><p class="is-size-6 title" v-html="g.title.rendered"></p></a>
                                            <br>
                                            <p class="is-size-6 subtitle">Green, <span class="is-size-6 subtitle">   {{g.date}}</span></p>
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
</div>
</template>
<script>
import dayjs from 'dayjs';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'
export default { 
    name : 'mobileblogs',
    mounted() {
        this.getBloglatest(),
        this.getBlogpopular(),
        this.getBlogstory(),
        this.getBlogjapan(),
        this.getBlogfood(),
        this.getBlogdesign(),
        this.getCategories(),
        this.getBloggreen()
    },
    data() {
        return { 
            bloglatest: [],
            blogpopular: [],
            blogstory: [],
            blogjapan: [],
            blogfood: [],
            blogdesign: [],
            bloggreen: [],
            categories: [],
            activeTab: 0
        }
    },
    methods: {
        async getBlogdesign() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=8&page=1&_embed'
            )
            const blogdesign = _.map(data, (d) => {
                const m = _.first(d._embedded['wp:featuredmedia'])
                d.image = m.source_url
                dayjs(d.modified.split('T')[0]);
                d.date = dayjs().format('MMMM DD, YYYY')
                return d
            })
            console.log(blogdesign);
            this.blogdesign = data;
        },
        async getBlogfood() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1867&page=1&_embed'
            )
            const blogfood = _.map(data, (f) => {
                const m = _.first(f._embedded['wp:featuredmedia'])
                f.image = m.source_url
                dayjs(f.modified.split('T')[0]);
                f.date = dayjs().format('MMMM DD, YYYY')
                return f
            })
            // console.log(blogfood)
            this.blogfood = data;
        },
        async getBlogjapan() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1860&page=1&_embed'
            )
            const blogjapan = _.map(data, (j) => {
                const m = _.first(j._embedded['wp:featuredmedia'])
                j.image = m.source_url
                dayjs(j.modified.split('T')[0]);
                j.date = dayjs().format('MMMM DD, YYYY')
                return j
            })
            // console.log(blogjapan);
            this.blogjapan = data;
        },
        async getBlogstory() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=153&page=1&_embed'
            )
            const blogstory = _.map(data, (s) => {
                const m = _.first(s._embedded['wp:featuredmedia'])
                s.image = m.media_details.sizes.medium_large.source_url
                dayjs(s.modified.split('T')[0]);
                s.date = dayjs().format('MMMM DD, YYYY')
                return s
            })
            // console.log(blogstory);
            this.blogstory = data;
        },

        async getBloglatest() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1866&page=1&_embed'
            )
            const bloglatest = _.map(data, (l) => {
                const m = _.first(l._embedded['wp:featuredmedia'])
                l.image = m.media_details.sizes.medium_large.source_url
                dayjs(l.modified.split('T')[0]);
                l.date = dayjs().format('MMMM DD, YYYY')
                return l
            })
            // console.log(bloglatest);
            this.bloglatest = data;
        },
        async getBlogpopular() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1863&page=1&_embed'
            )
            const blogpopular = _.map(data, (p) => {
                const m = _.first(p._embedded['wp:featuredmedia'])
                p.image = m.source_url
                dayjs(p.modified.split('T')[0]);
                p.date = dayjs().format('MMMM DD, YYYY')
                return p
            })
            // console.log(blogpopular);
            this.blogpopular = data;
        },
        async getBloggreen() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/posts?categories=1865&page=1&_embed'
            )
            const bloggreen = _.map(data, (g) => {
                const m = _.first(g._embedded['wp:featuredmedia'])
                g.image = m.source_url
                dayjs(g.modified.split('T')[0]);
                g.date = dayjs().format('MMMM DD, YYYY')
                return g
            })
            // console.log(bloggreen);
            this.bloggreen = data;
        },
        async getCategories() {
            const { data } = await this.$axios.get(
                'https://tgr.com.ph/wp-json/wp/v2/categories'
            )
            const categories = _.map(data, (c) => {
                return c
            })
            this.categories = data;
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
.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  padding: 1.25rem;
  width : 50%; 
  display : inline-block; 
  border-radius : 0px;
  height: 200px;
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