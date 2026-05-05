import PhotoCard from "@/components/PhotoCard";


const AllCourses = async() => {
    const res = await fetch('https://br-13-as-8.vercel.app/data.json')
    const photos = await res.json()
    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All Courses</h1>
            <div className="grid grid-cols-3 gap-4">
                {photos.map(photo=> <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default AllCourses;