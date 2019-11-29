<template>
  <div class="config-wrapper">
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item label="时间节点">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="7时" name="type"></el-checkbox>
          <el-checkbox label="12时" name="type"></el-checkbox>
          <el-checkbox label="15时" name="type"></el-checkbox>
          <el-checkbox label="20时" name="type"></el-checkbox>
          <el-checkbox label="21时" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="查看半径">
        <el-select v-model="form.value" placeholder="请选择">
          <el-option
            v-for="item in form.options"
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
  import { CheckboxGroup, Checkbox, Select, Form, Option, FormItem, Message } from 'element-ui'

  export default {
    name: 'config',
    components: {
      elCheckboxGroup: CheckboxGroup,
      elCheckbox: Checkbox,
      elSelect: Select,
      elForm: Form,
      elFormItem: FormItem,
      elOption: Option,
      Message
    },
    data () {
      return {
        form: {
          value: '50m',
          options: [{
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
          type: ['7时', '12时', '15时', '20时', '21时'],
        },
      }
    },
    methods: {}
  }
</script>

<!--<style scoped src="./Config.css"></style>-->
