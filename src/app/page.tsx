import { Button } from "@nextui-org/react";
import { FaRegFaceDizzy } from "react-icons/fa6";
import Link from 'next/link';

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl">Home Page</h1>
    <Button 
      as={Link}
      href='/members'
      color='danger' 
      variant='bordered' 
      startContent={<FaRegFaceDizzy size={20} />}

    >
      Launch
    </Button>
   </div> 
  );
}

