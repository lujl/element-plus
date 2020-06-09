---
sidebarDepth: 2
---

# Select 选择器

## 基础用法
适用广泛的基础单选

<example>
  <template v-slot:demo>
    <select-base></select-base>
  </template>
  
  <<< @/docs/.vuepress/components/select/base.vue
</example>


## 有禁用选项

<example>
  <template v-slot:demo>
    <select-option-disabled></select-option-disabled>
  </template>
  
  <<< @/docs/.vuepress/components/select/option-disabled.vue
</example>


## 禁用状态
选择器不可用状态

<example>
  <template v-slot:demo>
    <select-disabled></select-disabled>
  </template>
  
  <<< @/docs/.vuepress/components/select/disabled.vue
</example>


## 可清空单选
包含清空按钮，可将选择器清空为初始状态

<example>
  <template v-slot:demo>
    <select-clearable></select-clearable>
  </template>
  
  <<< @/docs/.vuepress/components/select/clearable.vue
</example>


## 基础多选
适用性较广的基础多选，用 Tag 展示已选项

<example>
  <template v-slot:demo>
    <select-multiple></select-multiple>
  </template>
  
  <<< @/docs/.vuepress/components/select/multiple.vue
</example>

## 自定义模板
可以自定义备选项

<example>
  <template v-slot:demo>
    <select-custom></select-custom>
  </template>
  
  <<< @/docs/.vuepress/components/select/custom.vue
</example>

## 分组
备选项进行分组展示

<example>
  <template v-slot:demo>
    <select-option-group></select-option-group>
  </template>

  <<< @/docs/.vuepress/components/select/option-group.vue
</example>

## 可搜索
可以利用搜索功能快速查找选项

<example>
  <template v-slot:demo>
    <select-filterable></select-filterable>
  </template>

  <template v-slot:tips>
    为el-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
  </template>
  
  <<< @/docs/.vuepress/components/select/filterable.vue
</example>


## 远程搜索
从服务器搜索数据，输入关键字进行查找

<example>
  <template v-slot:demo>
    <select-remote></select-remote>
  </template>

  <template v-slot:tips>
    为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果el-option是通过v-for指令渲染出来的，此时需要为el-option添加key属性，且其值需具有唯一性，比如此例中的item.value。
  </template>
  
  <<< @/docs/.vuepress/components/select/remote.vue
</example>

## 创建条目
可以创建并选中选项中不存在的条目

<example>
  <template v-slot:demo>
    <select-allow-create></select-allow-create>
  </template>

  <template v-slot:tips>
    使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。
  </template>
  
  <<< @/docs/.vuepress/components/select/allow-create.vue
</example>


## 配置选项
指定选项的值、标签、子选项为选项对象的某个属性值。 具体见代码

<example>
  <template v-slot:demo>
    <select-props></select-props>
  </template>
  
  <<< @/docs/.vuepress/components/select/props.vue
</example>