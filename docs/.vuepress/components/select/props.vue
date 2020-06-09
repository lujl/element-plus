<template>
  <elp-select v-model="value" :options="options" :props="defaultProps" placeholder="请选择"></elp-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          name: '热门城市',
          children: [{
            val: 'Shanghai',
            name: '上海'
          }, {
            val: 'Beijing',
            name: '北京'
          }]
        }, {
          name: '城市名',
          children: [{
            val: 'Chengdu',
            name: '成都'
          }, {
            val: 'Shenzhen',
            name: '深圳'
          }, {
            val: 'Guangzhou',
            name: '广州'
          }, {
            val: 'Dalian',
            name: '大连'
          }]
        }],
        value: '',
        defaultProps: {
          label: 'name',
          value: 'val',
          options: 'children'
        }
      }
    }
  }
</script>
