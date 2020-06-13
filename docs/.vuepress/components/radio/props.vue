<template>
  <div>
    <elp-radio v-model="value" :options="options" :props="defaultProps"></elp-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          val: '1',
          lab: '备选项1'
        }, {
          val: '2',
          lab: '备选项2'
        }, {
          val: '3',
          lab: '备选项3',
          disabled: true
        }],
        value: '1',
        defaultProps: {
          label: 'lab',
          value: 'val'
        }
      }
    }
  }
</script>
