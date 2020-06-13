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
          label: '备选项1'
        }, {
          value: '2',
          label: '备选项2'
        }, {
          value: '3',
          label: '备选项3'
        }],
        value: '1'
      }
    }
  }
</script>
