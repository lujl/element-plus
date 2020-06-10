<template>
  <div class="elp-select">
    <el-select v-bind="$attrs" v-on="$listeners" v-model="value">
      <template v-for="item in optionsCopy">
        <!-- 基本 -->
        <el-option
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
          v-if="!item.options"
          >
          <slot v-bind="item"></slot>
        </el-option>

        <!-- 分组 -->
        <el-option-group
          :key="item.label"
          :label="item.label"
          v-else
          >
          <el-option
            v-for="subItem in item.options"
            :key="subItem.value"
            :label="subItem.label"
            :value="subItem.value">
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
const defaultProps = {
  label: 'label',
  value: 'value',
  options: 'options'
}

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
      optionsCopy: [],
      value: ''
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
    },
    options: {
      immediate: true,
      handler (newVal) {
        if (this.props.label || this.props.value || this.props.options) {
          const props = Object.assign({}, defaultProps, this.props)
          this.optionsCopy = this.changeObjArrKeys(newVal, props)
        } else {
          this.optionsCopy = newVal
        }
      }
    }
  },
  methods: {
    changeObjArrKeys (arr, props) {
      return arr.map(item => {
        const newObj = {}
        Object.keys(props).forEach(key => {
          if ((key === 'label' || key === 'value') && item[props[key]]) {
            newObj[key] = item[props[key]]
          } else if (key === 'options' && item[props[key]]) {
            newObj[key] = this.changeObjArrKeys(item[props[key]], props)
          }
        })
        return newObj
      })
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
