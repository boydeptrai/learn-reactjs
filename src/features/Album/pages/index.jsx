import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/6/2/8/66282fb2645bd1ddbbe3b0dd22c796ef.jpg'
        },
        {
            id: 2,
            name: 'Những Sự Kết Hợp Mới',
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/8/d/5/f8d50b42ce9e0a5f79894322a6d632c1.jpg'
        },
        {
            id: 3,
            name: 'Ráp Việt Cực Chất',
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/2/0/8/a208a236de20ab5ec79ec99855ecc275.jpg'
        },
    ]
    return (
        <div>
            <h1>Lựa Chọn Hôm Nay</h1>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;