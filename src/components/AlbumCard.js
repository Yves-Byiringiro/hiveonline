import React from 'react'

const AlbumCard = (props) => {
  return (
    <div style={styles.mainDiv}>
      <p>{props.title}</p>
    </div>
  )
}

const styles = {
  mainDiv:{
    width:350,
    border: '1px solid darkblue',
    padding: 7
  },
}
export default AlbumCard;
