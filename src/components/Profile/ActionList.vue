<template>
  <tr>
    <td class="text-center">
      <i class="fa" :class="action.icon"></i>
    </td>
    <td>
     <span v-html="action.message"></span>
    </td>
    <td>2021/01/01 12:08</td>
  </tr>
</template>

<script>
export default {props:['action']};
</script>

<style></style>
