<template>
  <div class="elp-select">
    <el-select v-bind="$attrs" v-on="$listeners" v-model="value">
      <template v-for="item in options">
        <!-- 分组 -->
        <el-option-group
          :key="item.label"
          :label="item.label"
          v-if="isGroupOptions"
          >
          <el-option
            v-for="subItem in item.options"
            :key="subItem.value"
            :label="subItem.label"
            :value="subItem.value">
            <slot v-bind="subItem"></slot>
          </el-option>
        </el-option-group>

        <!-- 基本 -->
        <el-option
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
          v-else
          >
          <slot v-bind="item"></slot>
        </el-option>
      </template>

      <slot name="prefix"></slot>
      <slot name="empty"></slot>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'ElpSelect',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: [String, Array],
    options: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    isGroupOptions: function () {
      return this.options.some(item => item.options)
    }
  },
  watch: {
    selected: {
      immediate: true,
      handler (newVal) {
        this.value = newVal
      }
    },
    value: {
      handler (newVal) {
        this.$emit('change', newVal)
      }
    }
  },
  created () {
    // console.log('slots', this.$slots)
  }
}
</script>

<style type="text/css">
  .elp-select {
    display: inline-block;
    position: relative;
  }
</style>
