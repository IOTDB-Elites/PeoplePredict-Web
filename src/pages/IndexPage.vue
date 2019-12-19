<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="map-wrapper">
          <div-header :header="'城市地图'"></div-header>
          <heat-map v-if="configs.heat"></heat-map>
          <district-map v-else></district-map>
        </div>

        <div class="right-wrapper">
          <div class="config-wrapper">
            <div-header :header="'自定义配置'"></div-header>
            <config></config>
          </div>
          <div class="rank-wrapper" v-if="configs.heat">
            <div-header :header="'地点热度排名'"></div-header>
            <rank-table></rank-table>
          </div>
          <div class="rank-wrapper" v-else>
            <div-header :header="'区划热度排名'"></div-header>
            <rank-district></rank-district>
          </div>
        </div>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/layout/Layout.vue'
  import DivHeader from '../components/DivHeader.vue'
  import HeatMap from '../components/chart/HeatMap.vue'
  import DistrictMap from '../components/chart/DistrictMap.vue'
  import Config from '../components/config/Config.vue'
  import RankTable from '../components/rank/RankTable.vue'
  import RankDistrict from '../components/rank/RankDistrict.vue'
  import { mapState } from 'vuex'

  import { Message } from 'element-ui'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Message,
      DivHeader,
      HeatMap,
      DistrictMap,
      Config,
      RankTable,
      RankDistrict
    },
    computed: {
      ...mapState('config', {
        configs: state => state.configs
      })
    },
    data () {
      return {}
    }
  }
</script>

<style scoped src="./IndexPage.css"></style>
