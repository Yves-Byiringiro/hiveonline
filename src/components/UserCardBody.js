import React from 'react'

function UserCardBody(props) {
  return (
    <div style={styles.mainDiv}>
        <div>{props.name}</div>
        <div>{props.content}</div>

    </div>
  )
}

const styles = {
    mainDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        margin:5,
        paddingTop: 5,
        paddingBottom: 5,
    }
}
export default UserCardBody;