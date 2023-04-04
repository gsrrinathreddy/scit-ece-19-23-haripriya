import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:'https://www.tutorialspoint.com/badminton/images/badminton_racket.jpg',
    title: 'Playing games',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.narayanahealth.org/blog/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-8.40.47-PM.jpeg',
    title: 'Listening music',
    
  },
  {
    img: 'https://i.ytimg.com/vi/0QrbdHhP2Us/hqdefault.jpg',
    title: 'Reading books',
    
  },
  {
    img: 'https://i2.wp.com/www.skiptomylou.org/wp-content/uploads/2021/10/butterfly-drawing.jpg',
    title: 'Drawing',
    
  },
  
];