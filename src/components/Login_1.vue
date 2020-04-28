<template>
  <div class="Login_1_container">
      <div class="Login_1_box">
          <!-- 用户头像区 -->
          <div class="avatar_box">
              <img src="../assets/logo.png" alt="这是用户头像盒子">
          </div>
          <!-- 表单内容区 -->
          <!-- 动态为form 表单添加属性 对象 -->
          <el-form  :model="login_form" label-width="0px" class="login_form">
              <!-- 用户名 -->
            <el-form-item>
            <el-input v-model="login_form.username" prefix-icon="el-icon-user" ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item >
            <el-input v-model="login_form.password" type="password" prefix-icon="el-icon-lock" ></el-input>
            </el-form-item>
            <!-- 登陆   重置 -->
            <el-form-item class="btns">
             <el-button type="primary">登陆</el-button>
             <el-button type="info">重置</el-button>
            </el-form-item>
          </el-form>

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // 创建对象 存放user and password
            login_form:{
                username:'',
                password:''
            }
        }
    }
}
</script>

<style>

.Login_1_container{
    background-color: #253145;
    height: 100%;
    
}
.Login_1_box{
    width: 450px;
    height: 400px;
    background-color:white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-25%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    background-color: #ffffff;
}
.avatar_box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eeeeee;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    transform: translate(0,-35%);
}
.btns{
    display: flex;
    justify-content: flex-end;
}

</style>
