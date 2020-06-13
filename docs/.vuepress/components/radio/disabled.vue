<template>
  <div>
    <elp-radio v-model="value" :options="options"></elp-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '备选项1',
          disabled: true
        }, {
          value: '2',
          label: '备选项2',
          disabled: true
        }],
        value: '1'
      }
    }
  }
</script>
