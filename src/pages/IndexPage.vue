<template>
  <div class="body-wrapper">
    <layout>
      <banner></banner>
      <div class="container">
        <div class="brief-intro-wrapper">
          <el-row :gutter="20">
          </el-row>
        </div>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Banner from '../components/Banner.vue'
  import { Row, Message } from 'element-ui'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Banner,
      Message,
      elRow: Row,
    },
    data () {
      let reward = 'reward.jpg'
      return {
        photoNames: ['job.jpg', 'company.jpg', 'reward.jpg', 'skill.jpg'],
        intros: ['职位', '公司', '待遇', '技能'],
        link: ['JobFilterPage', 'CompanyDisplayPage', 'TreatmentPage', 'SkillPage']
      }
    }
  }
</script>

<style scoped src="./IndexPage.css"></style>
