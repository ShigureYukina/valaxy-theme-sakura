---
title: SakuraMultiColumns
title_zh-CN: 多列 (SakuraMultiColumns)
toc: true
categories:
  - components-layout
---

## 多列 SakuraMultiColumns

插槽(Slots) 填充两个元素实现双列布局，三个元素实现三列布局

## 双列示例

```vue
<template>
  <SakuraMultiColumns>
    <template #content />
    <template #right>
      <SakuraAside>
        <!-- components -->
      </SakuraAside>
    </template>
  </SakuraMultiColumns>
</template>
```

## 三列示例

```vue
<script lang="ts" setup>
import { useLayout } from 'valaxy'

const isHome = useLayout('home')
</script>

<template>
  <Layout>
    <SakuraMultiColumns>
      <template #left>
        <SakuraAside>
          <SidebarThemeDynamic />
        </SakuraAside>
      </template>
      <template #content>
        <RouterView />
      </template>
      <template #right>
        <SakuraAside>
          <SakuraToc v-if="!isHome" />
        </SakuraAside>
      </template>
    </SakuraMultiColumns>
  </Layout>
</template>
```

## API

### Slots

| 插槽名             | 说明                                     |
| ------------------ | ---------------------------------------- |
| default \| content | 主要内容区域，用于显示多列布局的中心内容 |
| left               | 左侧列，通常用于放置菜单或其他元素       |
| right              | 右侧列，通常用于附加信息或导航           |
