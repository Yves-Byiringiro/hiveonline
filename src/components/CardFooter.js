import React from 'react'

function CardFooter(props) {
    return (
        <div style={styles.mainDiv} onClick={props.onClickComments}>
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
export default CardFooter;