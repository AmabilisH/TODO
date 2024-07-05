<template>
    <el-col :span="12">
      <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
        <el-row :gutter="12">
          <el-col :span="21">{{ todo }}</el-col>
          <el-col :span="3">
            <el-button @click="remove" type="success" icon="el-icon-check" circle></el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      todo: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      remove() {
        this.$emit('removeTodo', this.index);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Añade estilos específicos para este componente aquí */
  </style>
  