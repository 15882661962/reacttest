import React from 'react';

class Page2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    userChange(e){
        const user=e.target.value
        this.setState({
            username:user
        })
    }
    psdChange(e){
        this.setState({
            password:e.target.value
        })
    }
    submit(){
        this.getConnect();
    }
    getConnect(){
        let text={
            username:this.state.username,
            password:this.state.password
        }
        console.log(text)
    }
    render(){
        return(
            <div>
                <h2>登录</h2>
                <input 
                type='text' 
                placeholder='用户名' 
                onChange={()=>this.userChange(this)}></input><br/>
                <input 
                type='password' 
                placeholder='请输入密码'
                onChange={()=>this.psdChange()}
                ></input>
                <br/>
                <button type='reset'>重置</button>
                <button type='submit' onClick={()=>this.submit}>提交</button>
            </div>
        )
    }
}

export default Page2