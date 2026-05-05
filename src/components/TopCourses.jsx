import React from 'react';
import PhotoCard from './PhotoCard';

const TopCourses = async() => {
    const res = await fetch('https://br-13-as-8.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 3)

    console.log(topPhotos)

    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Top-3 highest-rated Courses</h1>
            <div className="grid grid-cols-3 gap-3">
                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default TopCourses;