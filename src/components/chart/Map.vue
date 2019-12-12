<template>
  <div>
    <baidu-map class="map" :center="center" :zoom="14" :scroll-wheel-zoom="true">
      <bml-heatmap :data="mapData" :max="maxData" :radius="10">
      </bml-heatmap>
    </baidu-map>
  </div>
</template>

<script type="text/babel">
  import { BmlHeatmap } from 'vue-baidu-map'
  import { mapState } from 'vuex'

  export default {
    name: 'my-map',
    components: {
      BmlHeatmap
    },
    data () {
      return {
        center: {lng: 108.953, lat: 34.23},
      }
    },
    methods: {},
    computed: {
      ...mapState('config', {
        mapData: state => state.mapData,
        maxData: state => state.maxData
      })
    },
  }
</script>

<style>
  .map {
    width: 100%;
    height: 570px;
  }
</style>
