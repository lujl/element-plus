<template>
  <elp-select v-model="value" :options="options" placeholder="请选择">
    <template v-slot="slotProps">
      <span style="float: left">{{ slotProps.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ slotProps.value }}</span>
    </template>
  </elp-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: ''
      }
    }
  }
</script>
