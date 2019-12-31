import React from 'react';
import AppForm from './AppForm';
import AppList from './AppList';
import AppFooter from './AppFooter';

class TodoList extends React.Component{
    state={
        choosevalue:1,
        data:this.props.data
    }
    ChooseValue(id){
        this.setState({choosevalue:id})
    }
    OnAddTodoItem(newItem){
        let newdata=this.state.data.concat(newItem)
        this.setState({data:newdata})
    }
    render(){
        return(
            <div className='ui comments'>
                <h1>my todo list with react</h1>
                <div className='ui divider'></div>
                <AppForm
                AddTodoItem={this.OnAddTodoItem.bind(this)}>
                </AppForm>
                <AppList data={this.state.data}
                choosevalue={this.state.choosevalue}></AppList>
                <AppFooter
                SubmitChooseValue={this.ChooseValue.bind(this)}></AppFooter>
            </div>
        )
    }
}

export default TodoList