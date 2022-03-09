import React from 'react'

function UserCardFooter(props) {
  return (
    <div style={styles.mainDiv} onClick={props.onClickUserInfo}>
        {props.content}
    </div>
  )
}

const styles = {
    mainDiv:{
        background:'darkblue',
        color:'#fff',
        padding:10,
        textAlign:'center',
        cursor: 'pointer'
    }
}
export default UserCardFooter;