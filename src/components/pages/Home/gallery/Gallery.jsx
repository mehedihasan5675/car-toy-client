import React from 'react';

const Gallery = (props) => {
    return (
        <div style={{columns:props.columnCount,columnGap:0}}>
            {
                props.imgUrl.map((img,i)=>
                <img key={i} src={img} style={{padding:props.gap/2}} className='block w-full'></img>
                )
            }
        </div>
    );
};

export default Gallery;