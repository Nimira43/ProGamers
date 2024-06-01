import { Button } from "@nextui-org/react";
import { FaRegFaceDizzy } from "react-icons/fa6";

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl bg-[#111] text-[#ff4500] font-bold p-5 mb-3">NimiraTech &copy; 2024</h1>
    <Button color='primary' variant='bordered' startContent={<FaRegFaceDizzy size={20} />}>
      Launch
    </Button>
   </div> 
  );
}

