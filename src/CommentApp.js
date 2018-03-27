import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    constructor (){
        super()
        this.state={
            conmments:[]
        }
    }
    handleSubmitComment (comment){
        this.state.conmments.push(comment);
        this.setState({
            commments:this.state.conmments
        })
        console.log(comment.content)
    }
    render(){
        return(
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}/>
                {/*回调函数传值*/}
                <CommentList comments={this.state.conmments}/>
            </div>
        )
    }
}

export default CommentApp;