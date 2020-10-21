<template>
  <div>
    <mobileheader/>
    <mobilevideopage/>
    <mobileinquiry/>
    <mobilefooter/>
  </div>
</template>
<script>
import mobileheader from '~/components/MobileHeader';
import mobilelayout from '~/layouts/mobile/MobileLayout';
import mobilefooter from '~/components/MobileFooter';
import mobileworks from '~/components/MobileWorks';
import mobilevideopage from '~/components/MobileVideoPage';
import mobileinquiry from '~/components/MobileInquiry';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'

export default {
  layouts : 'mobilelayout',
  components : {
    mobileheader,
    mobilefooter,
    mobileinquiry,
    mobilevideopage
  },
  head(){
    return {
      title: 'Tokyo Grand Renovation - Videos',
      meta: [
        {
          hid: 'description',
          name: 'Tokyo Grand Renovation - Videos Page',
          content: 'Tokyo Grand Renovation - Videos Page'
        }
      ]
    }
  }
}
</script>
