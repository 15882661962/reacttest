import React from 'react'
import loginCss from './login.module.css'

class Login extends React.Component{
    render(){
        return(
            <div>
<div className={loginCss.loginBg}>
<img src={require('../../asset/images/login/background.jpg')} alt='background'></img>
</div>
<div className={loginCss.logo}>
<img src={require('../../asset/images/login/logo.png')} alt='logo'/>
</div>
<form bindsubmit="formSubmit" bindreset="formReset">
  <div className="section formInput">
    <div className={loginCss.sectionTitle}>
    <img src={require('../../asset/images/login/icon-email.png')} alt='email'/>
    </div>
    <input name="input" type="text" placeholder="请输入账号" />
  </div>
  <div className="section formInput">
    <div className={loginCss.sectionTitle}>
    <img src={require('../../asset/images/login/icon-password.png')} alt='password'/>
    </div>
    <input name="input" type="password" placeholder="请输入密码" />
  </div>
  <div>
    <button type="submit" className={loginCss.loginBtn} onClick={()=>this.login()}>登录</button>
  </div>
</form>
            </div>
        )
    }
}

export default Login