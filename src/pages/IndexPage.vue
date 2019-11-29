<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="map-wrapper">
          <div-header :header="'城市热力图'"></div-header>
          <map></map>
          <img src="../assets/img/map.png" width="750">
        </div>

        <div class="right-wrapper">
          <div class="config-wrapper">
            <div-header :header="'自定义配置'"></div-header>
            <config></config>
          </div>
          <div class="rank-wrapper">
            <div-header :header="'街道热度排名'"></div-header>
            <rank-table></rank-table>
          </div>
        </div>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/layout/Layout.vue'
  import DivHeader from '../components/DivHeader.vue'
  import Map from '../components/chart/Map.vue'
  import Config from '../components/config/Config.vue'
  import RankTable from '../components/rank/RankTable.vue'

  import { Message } from 'element-ui'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Message,
      DivHeader,
      Map,
      Config,
      RankTable
    },
    data () {
      return {}
    }
  }
</script>

<style scoped src="./IndexPage.css"></style>
