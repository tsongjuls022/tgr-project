<template>
<div class="nav" >
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      <label for="nav-check-phone">
        <a href="tel:+639176306741"><img class="phone-logo" id="img-phone" src="~/assets/logo3.png" style="display : block; margin : 0px auto; height : 30px;"></a>
      </label>
    </div>
  </div>
  <div class="nav-logo">
    <nuxt-link to="/"><img src="~/assets/logo.jpg" style="display : block; margin : 0px auto; height : 50px;"></nuxt-link>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="nav-links">
    <table style="width: 100%; text-color: white;">
        <tbody>
            <tr>
                <td style="text-align : right; width : 50%;"><a href="/">Home</a></td>
                <td><a href="/">ホーム</a></td>
            </tr>
            <tr>
                <td style="text-align : right;  width : 50%;"><a href="/works">Works</a></td>
                <td><a href="/works">ワークス</a></td>
            </tr>
            <tr>
                <td style="text-align : right;  width : 50%;"><a href="/blogs">Blog</a></td>
                <td><a href="/blogs">ブログ</a></td>
            </tr>
            <tr>
                <td style="text-align : right;  width : 50%;"><a href="/videos">Video</a></td>
                <td><a href="/videos">ビデオ</a></td>
            </tr>
            <tr>
                <td style="text-align : right;  width : 50%;"><a href="/stylebook">Stylebook</a></td>
                <td><a href="/stylebook">スタイルブック</a></td>
            </tr>
            <tr>
                <td style="text-align : right; width : 50%;"><a href="https://tgr.com.ph/interior-design-renovation-firm-makati-philippines/" target="_blank">Inquire</a></td>
                <td><a href="https://tgr.com.ph/interior-design-renovation-firm-makati-philippines/" target="_blank">ホーム</a></td>
            </tr>
            <tr>
                <td style="text-align : right;  width : 50%;"><a href="https://tgr.com.ph/interior-design-and-renovation-contractor-in-the-philippines/" target="_blank">About</a></td>
                <td ><a href="https://tgr.com.ph/interior-design-and-renovation-contractor-in-the-philippines/" target="_blank">アバウト</a></td>
            </tr>
        </tbody>
    </table>
    <table style="width : 100%; text-align : center;">
      <tbody>
        <tr>
          <td>
            <a class="footer-icon" href="https://www.facebook.com/TokyoGrandRenovation/" target="_blank">
              <b-icon
                icon="facebook"
                size="is-small"
                type="is-white">
              </b-icon>
            </a>
          </td>
          <td>
            <a class="footer-icon" href="https://www.instagram.com/tokyograndrenovation/?fbclid=IwAR2NI0xjDC39BL3BmEStWPlisOKLr4yeoXiqzSqiK00gRctfLH6Q7IxwdU0" target="_blank">
              <b-icon
                icon="instagram"
                size="is-small"
                type="is-white">
              </b-icon>
            </a>
          </td>
                    <td>
            <a class="footer-icon" href="https://www.facebook.com/TokyoGrandRenovation/" target="_blank">
              <b-icon
                icon="facebook"
                size="is-small"
                type="is-white">
              </b-icon>
            </a>
          </td>
                    <td>
            <a class="footer-icon" href="https://www.instagram.com/tokyograndrenovation/?fbclid=IwAR2NI0xjDC39BL3BmEStWPlisOKLr4yeoXiqzSqiK00gRctfLH6Q7IxwdU0" target="_blank">
              <b-icon
                icon="instagram"
                size="is-small"
                type="is-white">
              </b-icon>
            </a>
          </td>
                    <td>
            <a class="footer-icon" href="https://www.facebook.com/TokyoGrandRenovation/" target="_blank">
              <b-icon
                icon="facebook"
                size="is-small"
                type="is-white">
              </b-icon>
            </a>
          </td>
                    <td>
            <a class="footer-icon" href="https://www.instagram.com/tokyograndrenovation/?fbclid=IwAR2NI0xjDC39BL3BmEStWPlisOKLr4yeoXiqzSqiK00gRctfLH6Q7IxwdU0" target="_blank">
              <b-icon
                icon="instagram"
                size="is-small"
                type="is-white">
              </b-icon>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
export default { 
    name : 'mobileheader'
}
</script>
<style scoped>
.nav {
  height: 50px;
  width: 100%;
  background-color: #000000;
  position: fixed;
  z-index: 1;
}
.nav > .nav-header {
  display: inline;
  
}
.nav > .nav-logo {
  display: inline;
  
}
.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
  position: absolute;
  right: 0px;
}
.nav > .nav-btn {
  display: none;
}
.nav > .nav-links {
  display: inline;
  font-size: 18px;
}
.nav > .nav-links > table > tbody > tr > td > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
  font-weight: bold;;
}
.nav > .nav-links-phone > table > tbody > tr > td > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
  font-weight: bold;;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
  position: absolute;
  left: 0px;;
}
.footer-icon {
    padding : 0px 4px;
}

@media (max-width:6000px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }

  .nav > .nav-title {
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #000000;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
    z-index: 1;
  }
  .nav > .nav-links > table > tbody > tr > td > a {
    display: block;
    width: 100%;
    padding-top : 20px;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: 500px;
    overflow-y: auto;
  }
}
</style>