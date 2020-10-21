<template>
    <section>
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
    </section>
</template>
<script>
export default { 
    name : 'mobilevideo'
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
}
.iframe-video {
    width : 100%; 
    height : 800px;
}
@media only screen and (max-width:800px) {
    .iframe-video{
        height : 300px;
    }
}
</style>