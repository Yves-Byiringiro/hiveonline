import React from 'react'

function Button(props) {
  return (
      <div data-testid="button" style={styles.btnStyle}>{props.content}</div>
  )
}

const styles = {
    btnStyle:{
        marginTop:5,
        background: '#03045e',
        color: '#fff',
        borderRadius: 5,
        padding: 4,
        textAlign: 'center'
    }
}
export default Button