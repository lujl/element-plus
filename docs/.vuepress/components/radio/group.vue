<template>
  <div>
    <elp-radio v-model="value" :options="options" type="group-button" size="small"></elp-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '上海'
        }, {
          value: '2',
          label: '北京',
          disabled: true
        }, {
          value: '3',
          label: '广州'
        }, {
          value: '4',
          label: '深圳'
        }],
        value: '1'
      }
    }
  }
</script>
