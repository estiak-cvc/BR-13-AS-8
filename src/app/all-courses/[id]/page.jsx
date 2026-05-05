

const ViewDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://br-13-as-8.vercel.app/data.json')
    const photos = await res.json()
    const photo = photos.find(p => p.id == id)


    return (
        <div>
            <h1>{photo.title}</h1>
            <p>{photo.description}</p>          
            <p>{photo.instructor}</p>          
            <p>{photo.rating}</p>          
        </div>
    );
};

export default ViewDetailsPage;