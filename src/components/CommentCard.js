import React from 'react'

const CommentCard = (props) => {
    return (
        <div style={styles.mainDiv}>
            <h4>{props.name}</h4>
            <p>{props.body}</p>
            <p style={styles.email}>Email: {props.email}</p>
        </div>
    )
}

const styles = {
    mainDiv:{
        width:350,
        border: '1px solid darkblue',
        padding: 7
    },
    email:{
        background: '#557be5',
        width: 'fit-content',
        padding: 3,
        borderRadius: 8,
        fontStyle: 'italic',
        color: '#fff'
    }
}
export default CommentCard;
