<template>
  <div>
    <mobileheader/>
    <mobilebanner/>
    <mobileproject/>
    <mobilestylebook/>
    <!-- <mobileinquiry/> -->
    <mobilefooter/>
  </div>
</template>
<script>
import mobileheader from '~/components/MobileHeader';
import mobilelayout from '~/layouts/mobile/MobileLayout';
import mobilebanner from '~/components/MobileBanner';
import mobileproject from '~/components/MobileProject';
import mobilevideo from '~/components/MobileVideo';
import mobilestylebook from '~/components/MobileStylebook';
import mobilefooter from '~/components/MobileFooter';
import mobileinquiry from '~/components/MobileInquiry';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'

export default {
  layouts : 'mobilelayout',
  components : {
    mobileheader,
    mobilebanner,
    mobileproject,
    mobilevideo,
    mobilestylebook,
    mobilefooter,
    mobileinquiry
  },
  head(){
    return {
      title: 'Tokyo Grand Renovation - Home',
      meta: [
        {
          hid: 'description',
          name: 'Tokyo Grand Renovation - Home Page',
          content: 'Tokyo Grand Renovation - Home Page'
        }
      ]
    }
  }
}
</script>
