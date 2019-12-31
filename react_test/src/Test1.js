import React from 'react';
// function Name(props){
// return <h1>网站名称：{props.name}</h1>
// }

// function Url(props){
// return <h2>网站地址：{props.url}</h2>
// }

function NickName(props){
return <h3>网站名字：{props.nickname}</h3>
}

// function Msg(){
//   return(
//     <div>
//       <Name name='Christine'></Name>
//       <Url url='http://www.goldflow.cn'></Url>
//       <NickName nickname='洋洋觉主'></NickName>
//     </div>
//   )
// }

//const Test1=<Msg></Msg>

// function HelloMessage(props){
//   return (
//     <div>
//         <h1>hello</h1>
//         <h2>my name is react</h2>
//         <h3>now:{props.date.toLocaleTimeString()}.</h3>
//       </div>
//   );
// }
//const Test1=<HelloMessage date={new Date()}/>;
var testStyle={
  fontSize:100,
  color:'#eee'
}

class Test1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'新日期',
      site:'http://www.goldflow.cn',
      isToggleOn:true
    };
    this.handleClicks=this.handleClicks.bind(this)
  }
  handleClicks(){
    this.setState(prevState=>({
      isToggleOn:!prevState.isToggleOn
    }))
  }
  handleClickss=()=>{
    console.log('this is:',this)
  }
  handleClicksss(){
    console.log('this is:',this)
  }
  handleClickme(name,e){
    e.preventDefault();
    alert(name)
  }
// componentDidMount(){
//   this.timerID=setInterval(
//     ()=>this.setDaa(),
//     5000
//   )
// }
// componentWillMount(){
//   clearInterval(this.timerID)
// }
//   setDaa(){
//     this.setState({
//       date:'日期n'
//     })
//   }
  render(){
    return(
      <div>
        {/*注释。。。。。 */}
        <FlavorForm></FlavorForm>
        <HeMsg></HeMsg>
        <FirstOrDefault source="http://www.fengxing.shop/api/User/FirstOrDefault?userName=15882661962&partnerId=3"></FirstOrDefault>
        <Counter></Counter>
        <NumberList numbers={numbers}></NumberList>
        <Mailbox unreadMessages={msgs}></Mailbox>
        <Greeting isLoginedIn={false}></Greeting>
        <a href='www.goldflow.cn' onClick={this.handleClickme.bind(this,this.state.name)}>click meeeee</a>
        <button onClick={(e)=>this.handleClicksss(e)}>click me</button>
        <button onClick={this.handleClickss}>开关{this.state.isToggleOn?'on':'off'}</button>
        <Name name={this.state.name} title={title}></Name>
        <Url site={this.state.site}></Url>
        <NickName nickname='洋洋觉主'></NickName>
        <h1 style={testStyle}>{1==2?'true':'false'}</h1>
        <h2 data-myattribute='somevalue'>my name is react</h2>
        <h3>now:{this.state.date}.</h3>
        <a href={this.state.site} onClick={handleClick}>click me!</a>
      </div>
    )
  }
}
class FlavorForm extends React.Component{
  constructor(props){
    super(props)
    this.state={value:'coconut'}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e){
this.setState({value:e.target.value})
  }
  handleSubmit(e){
    alert('favorite:'+this.state.value)
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
<label>
  选择您最喜欢的xxx：
  <select value={this.state.value} onChange={this.state.handleChange}>
    <option value='gg'>123</option>
    <option value='rn'>456</option>
    <option value='tb'>789</option>
    <option value='fb'>012</option>
  </select>
</label>
<input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }

}
class FirstOrDefault extends React.Component{
  constructor(props){
    super(props)
    this.state={username:'',typeid:''}
  }
  componentWillUnmount(){
this.serverRequest.abort()
  }
  render(){
    return(
      <div>
        昵称:{this.state.username}
    <h1>typeid:{this.state.typeid}</h1>
      </div>
    )
  }
}

class HeContent extends React.Component{
  render(){
    return(
      <div>
        <input type='text' value={this.props.myDataProp} onChange={this.props.updateStateProp}></input>
        <h4>{this.props.myDataProp}</h4>
      </div>
    )
  }
}
class HeMsg extends React.Component{
  constructor(props){
    super(props)
    this.state={value:'hello hello'}
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  render(){
    var value=this.state.value
    return (
      <div>
        <HeContent myDataProp={value} updateStateProp={this.handleChange}></HeContent>
      </div>
    )
  }
}
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={clickCount:0}
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(function(state){
      return{clickCount:state.clickCount+1}
    })
  }
  render(){
    return(
    <h2 onClick={this.handleClick}>click times:{this.state.clickCount}</h2>
    )
  }
}
const numbers=[1,2,3,4,5]
function NumberList(props){
  const numbers=props.numbers
  const listItems=numbers.map((n)=>
  <li key={n.toString()}>
    {n}
  </li>
  )
  return(
  <ul>{listItems}</ul>
  )
}

function Mailbox(props){
  const unreadMessages=props.unreadMessages
  return(
    <div>
      <h1>msgg</h1>
      {unreadMessages.length>0&&
      <h2>
        您有{unreadMessages.length}条未读信息
        </h2>
        }
        {
          unreadMessages.length>0?<h1>h1</h1>:<h2>h2</h2>
        }
    </div>
  )
}
const msgs=['react','vue','angular','jquery']
function UserGreeting(props){
  return <h1>欢迎回来</h1>
}
function GuestGreeting(props){
  return <h1>请先注册</h1>
}
function Greeting(props){
  const isLoginedIn=props.isLoginedIn
  if(isLoginedIn){
    return <UserGreeting></UserGreeting>
  }else{
    return <GuestGreeting></GuestGreeting>
  }
}
var title='洋洋觉主'
class Name extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

class Url extends React.Component{
  render(){
    return(
    <a href={this.props.site}>{this.props.site}</a>
    )
  }
}

class HelloMsg extends React.Component{
  render(){
    return(
      <div>
        {/*注释。。。。。 */}
        <Name name='Christine'></Name>
        <Url url='http://www.goldflow.cn'></Url>
        <NickName nickname='洋洋觉主'></NickName>
        <h1 style={testStyle}>{1==2?'true':'false'}</h1>
        <h2 data-myattribute='somevalue'>my name is react</h2>
        <h3>now:{this.props.date}.</h3>
      </div>
    )
  }
}

function handleClick(e){
  e.preventDefault();
  console.log('连接被点击')
}

HelloMsg.defaultProps={
  date:'日期啊啊啊'
}

//const Test1=<HelloMsg></HelloMsg>

export default Test1;
  