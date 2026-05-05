import { Button, Card } from "@heroui/react";
import Image from "next/image";


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

      <Button color="primary" variant="flat">
        View Details
      </Button>

    </Card>
    );
};

export default PhotoCard;