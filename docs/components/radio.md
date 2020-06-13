---
sidebarDepth: 2
---

# Radio 选择器
在一组备选项中进行单选

## 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<example>
  <template v-slot:demo>
    <radio-base></radio-base>
  </template>
  
  <<< @/docs/.vuepress/components/radio/base.vue
</example>


## 禁用状态
单选框不可用的状态。

<example>
  <template v-slot:demo>
    <radio-disabled></radio-disabled>
  </template>
  
  <<< @/docs/.vuepress/components/radio/disabled.vue
</example>


## 按钮样式
按钮样式的单选组合。

<example>
  <template v-slot:demo>
    <radio-group></radio-group>
  </template>
  
  <<< @/docs/.vuepress/components/radio/group.vue
</example>


## 带有边框

<example>
  <template v-slot:demo>
    <radio-border></radio-border>
  </template>
  
  <<< @/docs/.vuepress/components/radio/border.vue
</example>


## 配置选项
指定选项的值、标签、子选项为选项对象的某个属性值。 具体见代码

<example>
  <template v-slot:demo>
    <radio-props></radio-props>
  </template>
  
  <<< @/docs/.vuepress/components/radio/props.vue
</example>