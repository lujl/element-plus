<template>
  <div class="example">
    <slot name="demo"></slot>
    <div class="code" :style="codeStyle">
      <div class="tips" v-if="$slots.tips">
        <slot name="tips"></slot>
      </div>
      <slot></slot>
    </div>
    <div class="expanded-btn" @click="onViewCode">
      <i :class="[isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom']"></i>
      <span>{{isExpanded ? '收起' : '查看'}}代码</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'example',
    data() {
      return {
        isExpanded: false
      }
    },
    computed: {
      codeStyle: function () {
        return {
          'height': this.isExpanded ? 'auto' : '0px'
        }
      }
    },
    methods: {
      onViewCode() {
        this.isExpanded = !this.isExpanded
      }
    },
    mounted() {
      //console.log(this.$slots)
    }
  }
</script>

<style>
  .example {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    margin-bottom: 24px;
    padding: 20px 20px 64px;
    position: relative;
    transition: all .4s;
  }
  .example:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .code {
    height: 0;
    overflow: hidden;
  }
  .tips {
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin-top: 10px;
    background-color: #fafafa;
  }
  .tips span{
    color: #5e6d82;
    background-color: #e6effb;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
  }
  .expanded-btn {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 44px;
  }
  .expanded-btn:hover {
    color: #409EFF;
    background-color: #f9fafc;
  }
</style>