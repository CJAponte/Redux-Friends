import React from 'react'
import {connect} from 'react-redux'
import {getFriends} from '../actions'
import {withRouter} from 'react-router-dom'

class FriendsList extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getFriends();
    }

    render(){
    return (
        <div>
            {this.props.friends.map(friend => 
                <h4>{friend.name}</h4>
                )}
        </div>
    )
}
}

const mapStateToProps = state => ({
    isFetching:state.isFetching,
    friends:state.friends
})

export default withRouter(
    connect(
        mapStateToProps,{getFriends}
    )(FriendsList)
);