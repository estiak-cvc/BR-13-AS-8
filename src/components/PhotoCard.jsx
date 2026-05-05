import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const PhotoCard = ({ photo }) => {

    return (
    <Card className="border p-4 space-y-3 shadow-md rounded-xl">
      
      <h2 className="text-lg font-semibold">
        {photo.title}
      </h2>

      <p className="text-sm text-gray-500">
        Instructor: {photo.instructor}
      </p>

      <p className="text-sm">
        ⭐ Rating: {photo.rating}
      </p>

        <Link href={`/all-courses/${photo.id}`}><Button color="primary" variant="flat">
        View Details
      </Button></Link>

    </Card>
    );
};

export default PhotoCard;