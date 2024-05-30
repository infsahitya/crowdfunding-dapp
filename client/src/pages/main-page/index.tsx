import Navbar from "@/components/base/Navbar";
import { Outlet } from "react-router-dom";

export default function __mainPage() {
  return (
    <div className=" bg-background h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
