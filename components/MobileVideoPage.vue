<template>
<div>
    <br><br><br>
    <section>
        <div style="padding : 5px 15px 5px 15px;">
            <p style="font-size : 4.9mm; font-weight : normal; color : #000000; font-family : Abril Fatface;">Videos and Stylebooks</p>
            <p style="font-size: 12px; font-weight:normal; color: #3C3C3D;">プロジェクト</p>
        </div>
        <b-tabs v-model="activeTab" position="is-centered" class="block" style="margin : 0px 0px 0px 0px; padding : 0px 0px 0px 0px;">
            <b-tab-item  label="Videos">
                <div style="overflow : hidden;">
                    <div class="card">
                        <div class="card-image">
                                <iframe class="iframe-video" src="https://www.youtube.com/embed/SWmzXvsBfsI" allowfullscreen></iframe>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Featured Video</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">注目のビデオ</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="https://www.youtube.com/watch?v=SWmzXvsBfsI" target="_blank"><p class="card-main-title">Japanese Luxury Interior Design Build</p></a>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="content">
                                <!-- <nuxt-link to="" class="card-more-project-link">More Video</nuxt-link> -->
                                <a class="card-more-project-link" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">
                                <iframe class="iframe-video" src="https://www.youtube.com/embed/twOEOlrjLpQ" allowfullscreen></iframe>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Featured Video</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">注目のビデオ</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="https://www.youtube.com/watch?v=twOEOlrjLpQ" target="_blank"><p class="card-main-title">Japanese Luxury Interior Design Build</p></a>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="content">
                                <!-- <nuxt-link to="" class="card-more-project-link">More Video</nuxt-link> -->
                                <a class="card-more-project-link" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">
                                <iframe class="iframe-video" src="https://www.youtube.com/embed/qQUtProTABw" allowfullscreen></iframe>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Featured Video</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">注目のビデオ</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="https://www.youtube.com/watch?v=qQUtProTABw" target="_blank"><p class="card-main-title">Japanese Luxury Interior Design Build</p></a>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="content">
                                <!-- <nuxt-link to="" class="card-more-project-link">More Video</nuxt-link> -->
                                <a class="card-more-project-link" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">
                                <iframe class="iframe-video" src="https://www.youtube.com/embed/639XoVB5MjQ" allowfullscreen></iframe>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Featured Video</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">注目のビデオ</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="https://www.youtube.com/watch?v=639XoVB5MjQ" target="_blank"><p class="card-main-title">Japanese Luxury Interior Design Build</p></a>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="content">
                                <!-- <nuxt-link to="" class="card-more-project-link">More Video</nuxt-link> -->
                                <a class="card-more-project-link" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">
                                <iframe class="iframe-video" src="https://www.youtube.com/embed/kuMPId-u1WQ" allowfullscreen></iframe>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Featured Video</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">注目のビデオ</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="https://www.youtube.com/watch?v=kuMPId-u1WQ" target="_blank"><p class="card-main-title">Japanese Luxury Interior Design Build</p></a>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="content">
                                <!-- <nuxt-link to="" class="card-more-project-link">More Video</nuxt-link> -->
                                <a class="card-more-project-link" href="https://www.youtube.com/channel/UCNRs-aKqRC-4wgjmxMOT-IA" target="_blank">More Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab-item>
            <b-tab-item label="Stylebooks">
                <div style="overflow : hidden;">
                    <div class="card">
                        <div class="card-image">
                                <a href="https://tgr.com.ph/tokyo-grand-renovation-smart-home-stylebook/" target="_blank"><img src="/smarthome-mockup.webp" alt=""></a>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Style Book</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">スタイルブック</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><a href="https://tgr.com.ph/tokyo-grand-renovation-smart-home-stylebook/" target="_blank"><p class="card-main-title">Stylebook "Smart Living Edition"</p></a></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                <div class="content">
                                    <!-- <nuxt-link to="" class="card-more-project-link">Read More</nuxt-link> -->
                                    <span class="card-main-category-japan"><a class="card-more-project-link" href="https://tgr.com.ph/stylebook-archives/" target="_blank">Read More</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-image">
                                <a href="https://tgr.com.ph/tokyo-grand-renovation-stylebook/" target="_blank"><img src="/stylebook.jpg" alt=""></a>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p class="card-main-category">Style Book</p></td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td><span class="card-main-category-japan">スタイルブック</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><a href="https://tgr.com.ph/tokyo-grand-renovation-stylebook/" target="_blank"><p class="card-main-title">Stylebook "Life and Design"</p></a></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p class="card-main-sub-category">Video</p>
                                                </td>
                                                <td>&nbsp;&nbsp;&nbsp;</td>
                                                <td>
                                                    <p class="card-main-sub-category">July 20, 2020</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                <div class="content">
                                    <!-- <nuxt-link to="" class="card-more-project-link">Read More</nuxt-link> -->
                                    <span class="card-main-category-japan"><a class="card-more-project-link" href="https://tgr.com.ph/stylebook-archives/" target="_blank">Read More</a></span>
                                </div>
                            </div>
                        </div>
                </div>
            </b-tab-item>
        </b-tabs>
    </section>
</div>
</template>
<script>
import dayjs from 'dayjs';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'
export default { 
    name : 'mobilevideopage',
    data() {
        return{
            activeTab : 0
        }
    }
}
</script>
<style scoped>
.card-main-category{
    font-family: Helvetica, Sans-Serif;
    color: #3C3C3D;
    font-size: 14.36px;
    font-weight: bold;
}
.card-more-project-link{
    font-family: Helvetica, Sans-Serif;
    color: #3C3C3D;
    font-size: 14.36px;
    font-weight: bold;
    text-decoration: underline;
}
.card-main-category-japan{
    font-size: 11.716535px;
    font-weight:normal;
    color: #3C3C3D;
}
.card-main-title{
    font-size: 4.9mm;
    font-weight:normal;
    color: #000000;
    font-family: Abril Fatface;
}
.card-main-sub-category{
    font-family: Raleway;
    font-size: 3.9mm;
    font-weight:normal;
    color: #3C3C3D;
}
.card-content {
  background-color: transparent;
  padding: 1.5rem;
}
.card {
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  width : 46%; 
  display : inline-block; 
  margin : 15px 22px;
}
.iframe-video {
    width : 100%; 
    height : 400px;
}
@media only screen and (max-width:1400px) {
    .card {
        width : 40%; 
        display : inline-block; 
        margin : 15px 40px;
    }
}

@media only screen and (max-width:960px) {
    .card-main-title{
        font-size: 3.2mm;
    }
    .card-main-sub-category{
        font-size: 2.5mm;
    }
}

@media only screen and (max-width:812px) {
    .card-main-title{
        font-size: 3.2mm;
    }
    .card-main-sub-category{
        font-size: 2.5mm;
    }
    .card {
        width : 95%; 
        display : inline-block; 
        margin : 10px 10px;
    }
}
</style>