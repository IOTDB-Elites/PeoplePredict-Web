<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
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

        <div class="map-wrapper" v-if="configs.heat">
          <div-header :header="'城市地图'"></div-header>
          <heat-map></heat-map>
        </div>

        <div class="district-wrapper" v-if="!configs.heat">
          <div class="sub-district-wrapper">
            <div-header :header="district + '行业人数分布'"></div-header>
            <tree-map></tree-map>
          </div>

          <div class="sub-district-wrapper">
            <div-header :header="district + '人数变化趋势'"></div-header>
            <calendar-map></calendar-map>
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
  import CalendarMap from '../components/chart/CalendarMap.vue'
  import TreeMap from '../components/chart/TreeMap.vue'
  import Config from '../components/config/Config.vue'
  import RankTable from '../components/rank/RankTable.vue'
  import RankDistrict from '../components/rank/RankDistrict.vue'
  import { mapState } from 'vuex'

  import { Message } from 'element-ui'

  export default {
    name: 'index-page',
    components: {
      TreeMap,
      Layout,
      Message,
      DivHeader,
      HeatMap,
      CalendarMap,
      Config,
      RankTable,
      RankDistrict
    },
    computed: {
      ...mapState('config', {
        configs: state => state.configs
      }),
      ...mapState('district', {
        district: state => state.district
      })
    },
    data () {
      return {}
    }
  }
</script>

<style scoped src="./IndexPage.css"></style>
