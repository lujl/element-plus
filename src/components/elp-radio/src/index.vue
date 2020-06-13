<template>
  <div class="elp-radio">
    <!-- default -->
    <template v-if="isDefaultType">
      <el-radio v-for="item in optionsCopy" v-bind="deleteObjKeys(merge(item, $attrs), ['labelName'])" v-on="$listeners" :key="item.label">
        {{item.labelName}} 123
      </el-radio>
    </template>

    <template v-else>
      <el-radio-group v-bind="$attrs" v-on="$listeners">
        <!-- group -->
        <template v-if="isGroupType">
          <el-radio v-for="item in optionsCopy" v-bind="deleteObjKeys(item, ['labelName'])" :key="item.label">{{item.labelName}}</el-radio>
        </template>
        <!-- group-button -->
        <template v-if="isGroupButtonType">
          <el-radio-button v-for="item in optionsCopy" v-bind="deleteObjKeys(item, ['labelName'])" :key="item.label">{{item.labelName}}</el-radio-button>
        </template>
      </el-radio-group>
    </template>
  </div>
</template>
<script>
import { toPropsKeys, merge, deleteObjKeys } from '../../../utils/index'

const defaultProps = {
  label: 'label',
  value: 'value'
}

export default {
  name: 'ElpRadio',
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: String,
      default: () => {
        return 'default'
      }
    },
    props: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    isDefaultType() {
      return this.type === 'default'
    },
    isGroupType() {
      return this.type === 'group'
    },
    isGroupButtonType() {
      return this.type === 'group-button'
    }
  },
  watch: {
    options: {
      immediate: true,
      handler (arr) {
        if (Object.keys(this.props).length) {
          const props = merge({}, defaultProps, this.props)
          this.toRadioOptions(toPropsKeys(arr, props))
        } else {
          this.toRadioOptions(arr)
        }
      }
    },
  },
  data () {
    return {
      optionsCopy: []
    }
  },
  methods: {
    merge(item, attrs) {
      return merge({}, item, attrs)
    },
    toRadioOptions(arr) {
      this.optionsCopy = arr.map(item => {
        let label = item.value
        let newObj = Object.assign({}, item, {
          label,
          labelName: item.label
        })
        delete newObj.value
        return newObj
      })
    },
    deleteObjKeys(obj, keys) {
      return deleteObjKeys(obj, keys)
    }
  }
}
</script>

<style type="text/css">
  .elp-radio {
    display: inline-block;
    position: relative;
  }
</style>
