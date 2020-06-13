<template>
  <div class="elp-select">
    <el-select v-bind="$attrs" v-on="$listeners">
      <template v-for="item in optionsCopy">
        <!-- 基本 -->
        <el-option
          :key="item.value"
          v-bind="item"
          v-if="!item.options"
          >
          <slot v-bind="item"></slot>
        </el-option>

        <!-- 分组 -->
        <el-option-group
          :label="item.label"
          :disabled="item.disabled"
          v-else
          >
          <el-option
            v-for="subItem in item.options"
            :key="subItem.value"
            v-bind="subItem">
            <slot v-bind="subItem"></slot>
          </el-option>
        </el-option-group>
      </template>

      <slot name="prefix"></slot>
      <slot name="empty"></slot>
    </el-select>
  </div>
</template>
<script>
import { toPropsKeys, merge, deleteObjKeys } from '../../../utils/index'

const defaultProps = {
  label: 'label',
  value: 'value',
  options: 'options'
}

export default {
  name: 'ElpSelect',
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    props: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      optionsCopy: []
    }
  },
  watch: {
    options: {
      immediate: true,
      handler (newVal) {
        if (this.props.label || this.props.value || this.props.options) {
          const props = merge({}, defaultProps, this.props)
          this.optionsCopy = toPropsKeys(newVal, props)
        } else {
          this.optionsCopy = newVal
        }
      }
    }
  }
}
</script>

<style type="text/css">
  .elp-select {
    display: inline-block;
    position: relative;
  }
</style>
