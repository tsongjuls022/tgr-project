<template>
  <div>
    <mobileheader/>
    <!-- <mobileblogsbanner/> -->
    <mobileblogs/>
    <!-- <mobileinquiry/> -->
    <mobilefooter/>
  </div>
</template>
<script>
import mobileheader from '~/components/MobileHeader';
import mobilelayout from '~/layouts/mobile/MobileLayout';
import mobilefooter from '~/components/MobileFooter';
import mobileblogs from '~/components/MobileBlogs';
import mobileinquiry from '~/components/MobileInquiry';
import mobileblogsbanner from '~/components/MobileBlogsbanner';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'

export default {
  layouts : 'mobilelayout',
  components : {
    mobileheader,
    mobilefooter,
    mobileblogs,
    mobileinquiry,
    mobileblogsbanner
  },
  head(){
    return {
      title: 'Tokyo Grand Renovation - Blogs',
      meta: [
        {
          hid: 'description',
          name: 'Tokyo Grand Renovation - Blogs Page',
          content: 'Tokyo Grand Renovation - Blogs Page'
        }
      ]
    }
  }
}
</script>
