<template>
  <div class="table-wrapper">
    <div v-if="districtData.length === 0" :style="{textAlign: 'center'}">
      <img src="../../assets/img/loading.gif" width="200"/>
    </div>
    <div v-else>
      <el-table
        ref="districtTable"
        :data="districtData"
        stripe
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="index"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="区划"
          width="150">
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
  import { mapActions, mapState, mapMutations } from 'vuex'

  export default {
    name: 'RankTable',
    components: {
      elTable: Table,
      elTableColumn: TableColumn
    },
    data () {
      return {
        currentRow: this.districtData === undefined ? null : this.districtData[0]
      }
    },
    computed: {
      ...mapState('config', {
        districtData: state => state.districtData
      })
    },
    methods: {
      ...mapActions('district', [
        'fetchDistrictPoint',
        'fetchDistrictTreemap'
      ]),
      handleCurrentChange (val) {
        this.currentRow = val
        this.fetchDistrictPoint({
          district: val
        })
        this.fetchDistrictTreemap({
          district: val.name
        })
      }
    }
  }
</script>
