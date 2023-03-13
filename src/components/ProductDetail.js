import React from 'react'
//import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail({ product }) {
    return (
        <Box sx={{ boxShadow: 1, m: 2, p: 2 }}>
            <div className='productWrap'>
                {/* TODO */}
                <div>
                    <img src={product.thumbnailUrl} alt="product" />
                </div><br />
                <div className='productDetails'>
                    <h2>{product.title} <span className='productType'>{product.type}</span></h2>
                </div>
                {/* <div><ShareIcon className='share' /></div> 
          <div><ThumbUpIcon className='like' /></div>
          <div><ShoppingCartIcon className='buy' /></div> */}
                <div>
                    <ShareIcon className='share' />
                    <ThumbUpIcon className="likeIcon" />
                    <ShoppingCartIcon className='buy' />
                </div>
            </div>
        </Box>
    )
}

export default ProductDetail