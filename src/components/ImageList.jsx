import { Box, ImageList as ImageListMUI, ImageListItem } from "@mui/material"

import itemData from '../utils/itemData'

const ImageList = () => {
    return (
        <Box>
            <ImageListMUI variant = "standard" cols = {5}>
                { itemData.map( (image, index) => (
                    <ImageListItem key = { index }>
                        <img src = { image.img } alt = { image.title } loading = "lazy" />
                    </ImageListItem>
                )) }
            </ImageListMUI> 
        </Box>
    )
}

export default ImageList