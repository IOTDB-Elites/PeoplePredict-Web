<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="left-wrapper" @click="goToIndexPage">
        <img src="../../assets/img/icon.jpg" width="70">
      </div>

      <div class="right-wrapper">
        <div class="input-wrapper">
          <el-input class="search-input"
                    placeholder=""
                    v-model="keyword"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i>
          </el-input>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
  import { Input, Button, Message } from 'element-ui'
  import { router } from '../../main'

  export default {
    name: 'navigator',
    components: {
      elInput: Input,
      elButton: Button,
      Message
    },
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      handleSearch () {
        if (this.keyword.length === 0) {
          Message.warning('请输入搜索内容！')
        }
      },
      goToIndexPage () {
        router.push({name: 'IndexPage'})
      },
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
