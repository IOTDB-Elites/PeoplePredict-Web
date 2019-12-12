<template>
  <div class="table-wrapper">
    <div v-if="rankList.length === 0" :style="{textAlign: 'center'}">
      <img src="../../assets/img/loading.gif" width="200"/>
    </div>
    <div v-else>
      <el-table
        :data="rankList"
        stripe
        height="300"
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="地点"
          width="230">
        </el-table-column>
        <el-table-column
          prop="val"
          label="人数">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import { Table, TableColumn } from 'element-ui'
  import { mapState } from 'vuex'

  export default {
    name: 'RankTable',
    components: {
      elTable: Table,
      elTableColumn: TableColumn
    },
    data () {
      return {}
    },
    computed: {
      ...mapState('config', {
        rankList: state => state.rankList
      })
    },
    methods: {}
  }
</script>
