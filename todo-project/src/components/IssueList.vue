
<template>
  <div>
    <h1>lista de problemas</h1>
    <el-button type="success" @click="getIssues()">Obtener emisión</el-button>
    <el-row :gutter="12">
      <el-col :span="12" v-for="issue in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ issue.title }}</el-col>
            <el-col :span="3">
              <!-- Código 1. -->
              <el-button @click="closeIssue(issue.number)" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// compendio
export default {
  // compendio
  methods: {
    getIssues() {
      client.get('/issues')
        .then((res) => {
          this.issues = res.data;
      })
    },
    // MÉTODO recién creado
    closeIssue(number){
      client.patch(`/issues/${number}`, // --Código 2.
          {
            state: 'closed'
          },
        )
        .then(() => {
          this.issues.some((v, i) => { // --Código 3.
            if(v.number == number) this.issues.splice(i, 1); // --Código 4.
          })
      })
    },
  }
}
</script>