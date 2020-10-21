<template>
  <div>
    <mobileheader/>
    <mobilestylebookpage/>
    <mobileinquiry/>
    <mobilefooter/>
  </div>
</template>
<script>
import mobileheader from '~/components/MobileHeader';
import mobilelayout from '~/layouts/mobile/MobileLayout';
import mobilefooter from '~/components/MobileFooter';
import mobileworks from '~/components/MobileWorks';
import mobilestylebookpage from '~/components/MobileStylebookPage';
import mobileinquiry from '~/components/MobileInquiry';
import axios from '@nuxtjs/axios';
import * as _ from 'lodash'

export default {
  layouts : 'mobilelayout',
  components : {
    mobileheader,
    mobilefooter,
    mobileinquiry,
    mobilestylebookpage
  },
  head(){
    return {
      title: 'Tokyo Grand Renovation - Stylebooks',
      meta: [
        {
          hid: 'description',
          name: 'Tokyo Grand Renovation - Stylebooks Page',
          content: 'Tokyo Grand Renovation - Stylebooks Page'
        }
      ]
    }
  }
}
</script>
