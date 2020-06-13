<template>
  <div>
    <elp-radio v-model="value" :options="options" type="group" size="small"></elp-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '备选项1',
          border: true
        }, {
          value: '2',
          label: '备选项2',
          border: true
        }, {
          value: '3',
          label: '备选项3',
          disabled: true,
          border: true
        }],
        value: '1'
      }
    }
  }
</script>
