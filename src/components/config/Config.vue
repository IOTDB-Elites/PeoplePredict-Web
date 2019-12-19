<template>
  <div class="config-wrapper">
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item>
        <el-switch
          v-model="form.heat"
          active-text="热力图"
          inactive-text="区划图"
          @change="handleConfig">
        </el-switch>
      </el-form-item>
      <el-form-item label="选择日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
          @change="handleSearch">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="时间节点" v-if="form.heat">
        <el-select v-model="form.time" placeholder="请选择" @change="handleSearch">
          <el-option-group
            v-for="group in form.timeOptions"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      <el-form-item label="查看半径" v-if="form.heat">
        <el-select v-model="form.r" placeholder="请选择" @change="handleSearch">
          <el-option
            v-for="item in form.rOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import Vue from 'vue'
  import { Select, Form, Option, OptionGroup, FormItem, DatePicker, Message, Switch } from 'element-ui'
  import { mapActions, mapState, mapMutations } from 'vuex'
  import { store } from '../../main'

  export default {
    name: 'config',
    components: {
      elSelect: Select,
      elDatePicker: DatePicker,
      elForm: Form,
      elFormItem: FormItem,
      elOption: Option,
      elOptionGroup: OptionGroup,
      elSwitch: Switch,
      Message
    },
    data () {
      return {
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < new Date(2019, 7, 23, 0, 0, 0) || time.getTime() > new Date(2019, 8, 23, 0, 0, 0)
          }
        },
        form: {
          heat: false,
          r: '50',
          time: '按天聚合',
          timeOptions: [{
            label: '聚合查询',
            options: [{
              value: '按天聚合',
              label: '按天聚合'
            }, {
              value: '按周聚合',
              label: '按周聚合'
            }]
          }, {
            label: '单点查询',
            options: [{
              value: '7',
              label: '7时'
            }, {
              value: '12',
              label: '12时'
            }, {
              value: '15',
              label: '15时'
            }, {
              value: '20',
              label: '20时'
            }, {
              value: '21',
              label: '21时'
            }]
          }],
          rOptions: [{
            value: '50',
            label: '50m'
          }, {
            value: '100',
            label: '100m'
          }, {
            value: '200',
            label: '200m'
          }, {
            value: '500',
            label: '500m'
          }, {
            value: '1000',
            label: '1km'
          }],
          date: '2019-08-30'
        },
      }
    },
    methods: {
      ...mapActions('config', [
        'fetchRankList',
        'fetchMapData',
        'fetchDistrictData'
      ]),
      ...mapMutations('config', [
        'saveRankList',
        'saveMapData',
        'saveMaxData',
        'saveConfig',
        'saveDistrict'
      ]),
      ...mapMutations('point', [
        'savePointData',
        'saveStatistic'
      ]),
      handleSearch () {
        const config = this.handleConfig()

        this.saveRankList([])
        this.saveMapData([])
        this.savePointData({pointData: [], statistic: null})
        this.saveMaxData(0)

        this.fetchRankList({
          config: config
        })
        this.fetchMapData({
          config: config
        })
        this.fetchDistrictData({
          config: config
        })
      },
      handleConfig () {
        let config = {
          month: new Date(this.form.date).getMonth() + 1,
          day: new Date(this.form.date).getDate(),
          time: this.form.time,
          radius: this.form.r,
          heat: this.form.heat
        }
        this.saveConfig(config)
        return config
      }
    }
  }
</script>
