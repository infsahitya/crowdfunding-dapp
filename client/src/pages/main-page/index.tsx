import { ethers } from "ethers";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAppStore from "@/store/app.store";
import Navbar from "@/components/base/Navbar";
import { abi } from "../../../../server/artifacts/contracts/Crowdfunding.sol/Crowdfunding.json";

export default function __mainPage() {
  const setApp = useAppStore((state) => state.setApp);
  const setProvider = useAppStore((state) => state.setProvider);

  useEffect(() => {
    // eslint-disable-next-line
    // @ts-ignore
    const provider = new ethers.BrowserProvider(window.ethereum);

    const app = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_DEPLOYED_ADDRESS,
      abi,
      provider,
    );

    setApp(app);
    setProvider(provider);
  }, []);

  return (
    <div className=" bg-background h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
