<template>
  <div>
    <elp-select v-model="value1" :options="options" multiple placeholder="请选择"></elp-select>
    <elp-select v-model="value2" :options="options" multiple collapse-tags placeholder="请选择" style="margin-left: 20px;"></elp-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
        value2: []
      }
    }
  }
</script>
