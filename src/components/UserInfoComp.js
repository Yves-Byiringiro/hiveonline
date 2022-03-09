import React from 'react'

function UserInfo(props) {
  return (
    <div style={styles.mainDiv}>
        <div style={styles.userName}>
            <h4>Name : {props.name}</h4>
        </div>
        <div style={styles.otherInfo}>
          <div>
            <p><span style={styles.label}>Username</span>: {props.username}</p>
            <p><span style={styles.label}>Email</span>: {props.email}</p>
            <p><span style={styles.label}>Phone</span>: {props.phone}</p>
            <p><span style={styles.label}>Website</span>: {props.website}</p>
          </div>
          <div>
            <p><span style={styles.label}>Street</span>: {props.street}</p>
            <p><span style={styles.label}>City</span>: {props.city}</p>
            <p><span style={styles.label}>Suite</span>: {props.suite}</p>
            <p><span style={styles.label}>Company name</span>: {props.company}</p>

          </div>
        </div>
    </div>
  )
}

const styles = {
  mainDiv:{
    margin:'auto',
    width: 900,
    border: '1px solid darkblue'
  },
  userName:{
    textAlign: 'center',
    padding:15

  },
  otherInfo:{
    display: 'flex',
    justifyContent: 'space-between',
    marginTop:40
  },
  label:{
    fontWeight:600
  }
}
export default UserInfo;