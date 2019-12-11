<template>
  <div class="config-wrapper">
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item label="选择日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="时间节点">
        <el-select v-model="form.time" placeholder="请选择">
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
      <el-form-item label="查看半径">
        <el-select v-model="form.r" placeholder="请选择">
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
  import { Select, Form, Option, OptionGroup, FormItem, DatePicker, Message } from 'element-ui'

  export default {
    name: 'config',
    components: {
      elSelect: Select,
      elDatePicker: DatePicker,
      elForm: Form,
      elFormItem: FormItem,
      elOption: Option,
      elOptionGroup: OptionGroup,
      Message
    },
    data () {
      return {
        form: {
          r: '50m',
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
              value: '7时',
              label: '7时'
            }, {
              value: '12时',
              label: '12时'
            }, {
              value: '15时',
              label: '15时'
            }, {
              value: '20时',
              label: '20时'
            }, {
              value: '21时',
              label: '21时'
            }]
          }],
          rOptions: [{
            value: '50m',
            label: '50m'
          }, {
            value: '100m',
            label: '100m'
          }, {
            value: '200m',
            label: '200m'
          }, {
            value: '500m',
            label: '500m'
          }, {
            value: '1km',
            label: '1km'
          }],
          date: '2019-08-30'
        },
      }
    },
    methods:
      {}
  }
</script>

<!--<style scoped src="./Config.css"></style>-->
