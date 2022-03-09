import React from 'react';
import UserCardHeader from './UserCardHeader';
import UserCardBody from './UserCardBody';
import UserCardNav from './UserCardNav';
import UserCardFooter from './UserCardFooter';


function UserCard(props) {
  return (
    <div style={styles.mainDiv}>
        <UserCardHeader name={props.name} email={props.email} />
        <UserCardBody name="City" content={props.city}/>
        <UserCardBody name="Street" content={props.street}/>
        <UserCardBody name="Phone" content={props.phone}/>
        <UserCardNav onClickPosts={props.onClickPosts} onClickAlbums={props.onClickAlbums} />
        <UserCardFooter onClickUserInfo={props.onClickUserInfo} content="View user information"/>
    </div>
  )
}

const styles = {
    mainDiv:{
        background:'#eff0f1',
        width:350,
        borderRadius:10,
        border:'red'
    }
}

export default UserCard;