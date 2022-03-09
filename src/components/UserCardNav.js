import React from 'react'

function UserCardNav(props) {
  return (
    <div style={styles.mainDiv}>
        <div style={styles.posts} onClick={props.onClickPosts}>Posts</div>
        <div style={styles.albums} onClick={props.onClickAlbums}>Albums</div>
    </div>
  )
}

const styles = {
    mainDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom:8
    },
    posts:{
        paddingLeft: 20,
        paddingRight: 20,
        background: '#49d99d',
        color: 'white',
        borderRadius: 3,
        cursor: 'pointer',
        width: 100,
        textAlign: 'center'
    },
    albums:{
        paddingLeft: 20,
        paddingRight: 20,
        background: 'rgb(176 79 225)',
        color: 'white',
        borderRadius: 3,
        cursor: 'pointer',
        width: 100,
        textAlign: 'center'
    }
}
export default UserCardNav;