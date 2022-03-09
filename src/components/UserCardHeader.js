import React from 'react'

function UserCardHeader(props) {
  return (
    <div style={styles.mainDiv}>
        <h4>{props.name}</h4>
        <p>{props.email}</p>
    </div>
  )
}

const styles = {
     mainDiv:{
        background:'darkblue',
        width:300,
        borderRadius: 18,
        color: '#fff',
        padding: 10
    }
}
export default UserCardHeader;