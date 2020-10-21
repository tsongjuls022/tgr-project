<template>
    <section>
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
    </section>
</template>
<script>
export default { 
    name : 'mobilestylebook'
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
</style>