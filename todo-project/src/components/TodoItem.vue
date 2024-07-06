<template>
  <el-col :span="12">
    <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
      <el-row :gutter="12">
        <el-col :span="21">{{ item }}</el-col>
        <el-col :span="3">
          <el-button @click="removeItem(index)" type="success" icon="el-icon-check" circle></el-button>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    removeItem(index) {
      this.$emit('remove-item', index);
    }
  }
};
</script>

<style scoped>

</style>
