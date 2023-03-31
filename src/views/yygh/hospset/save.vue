<template>
  <div class="app-container">
     <el-form label-width="120px" :rules="xxx" :model="hospset" ref="vvv">
     
       <el-form-item label="医院名称" prop="hosname">
        <el-input v-model="hospset.hosname"/>
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospset.hoscode"/>
      </el-form-item>
      <el-form-item label="api地址">
        <el-input v-model="hospset.apiUrl"/>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="hospset.contactsName"/>
      </el-form-item>
      <el-form-item label="电话" prop="contactsPhone">
        <el-input v-model="hospset.contactsPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate('vvv')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import hospset from '@/api/hospset.js'
export default {
  data(){
    return {
      saveBtnDisabled:false,
      hospset:{},
      xxx:{
          hosname: [
            { required: true, message: '请输入医院名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          contactsPhone:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ]
        }
    }
  },
  methods:{
    saveOrUpdate(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
             this.saveBtnDisabled=true;

            if(!this.hospset.id){
              //添加操作
              hospset.addHospital(this.hospset).then(resp=>{
                this.$message.success("添加成功");
                //路由跳转的
                this.$router.push({path:'/yygh/hospset/list'})
              })
            }else{
              //修改操作
             hospset.update(this.hospset).then(resp=>{
                this.$message.success("修改成功");
                //路由跳转的
                this.$router.push({path:'/yygh/hospset/list'})
             })
            }
           
          } else {
             this.$message.error("表单填写有误")
            return false;
          }
        });
        
    }
  },
  created(){
    if(this.$route.params && this.$route.params.aid){
       var id= this.$route.params.aid;
       hospset.detail(id).then(resp=>{
         this.hospset= resp.data.item;
       })
    }
    
  }
}
</script>

