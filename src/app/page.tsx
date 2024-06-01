import { Button } from "@nextui-org/react";
import { FaRegFaceDizzy } from "react-icons/fa6";
import Link from 'next/link';

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl bg-[#111] text-[#ff4500] font-bold p-5 mb-3">NimiraTech &copy; 2024</h1>
    <Button 
      as={Link}
      href='/members'
      color='primary' 
      variant='bordered' 
      startContent={<FaRegFaceDizzy size={20} />}

    >
      Launch
    </Button>
   </div> 
  );
}

