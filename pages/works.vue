<template>
  <div>
    <mobileheader/>
    <mobilebanner/>
    <mobileworks/>
    <!-- <mobileinquiry/> -->
    <mobilefooter/>
  </div>
</template>
<script>
import mobileheader from '~/components/MobileHeader';
import mobilelayout from '~/layouts/mobile/MobileLayout';
import mobilefooter from '~/components/MobileFooter';
import mobileworks from '~/components/MobileWorks';
import mobileinquiry from '~/components/MobileInquiry';
import mobilebanner from '~/components/MobileBanner';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'

export default {
  layouts : 'mobilelayout',
  components : {
    mobileheader,
    mobilefooter,
    mobileinquiry,
    mobileworks,
    mobilebanner
  },
  head(){
    return {
      title: 'Tokyo Grand Renovation - Works',
      meta: [
        {
          hid: 'description',
          name: 'Tokyo Grand Renovation - Works Page',
          content: 'Tokyo Grand Renovation - Works Page'
        }
      ]
    }
  }
}
</script>
