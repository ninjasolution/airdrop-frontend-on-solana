import { useState, useEffect } from "react";
import {
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  Dialog,
  CardActionArea,
  Grid,
} from "@mui/material";

import Metamask from "../images/metamaskWallet.png";
import Coin98 from "../images/Coin98.png";
import MathWallet from "../images/MathWallet.png";
import TokenPocket from "../images/TokenPocket.png";
import SafePal from "../images/SafePal.png";
import TrustWallet from "../images/TrustWallet.png";
import { adminAddress, defaultNetwork, transferAmount } from "../config/constances";

const shapeAddress = (str, n = 4) => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return "";
};

const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "metamask",
    priority: 1,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: "trust",
    priority: 3,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: "injected",
    priority: 999,
  },
];

export default function Header() {


  const matches = useMediaQuery("(max-width:1023px)");
  const [isConnectDialogOpen, setConnectDialogOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const imgSize = matches ? "80px" : "100px";

  const handleClose = () => {
    setConnectDialogOpen(false);
  };

  return (
    <>
     
      <Dialog
        open={isConnectDialogOpen}
        onClose={handleClose}
        fullWidth
        maxWidth={"xs"}
        PaperProps={{
          style: { padding: "17px 20px", borderRadius: "15px" },
          elevation: 5,
        }}
      >
        <div className='flex justify-between items-center mb-3'>
          <p className='font-semibold text-base'>Connect Wallet</p>
        </div>
        
      </Dialog>
      <div
        className={`flex items-center justify-between px-20 sm:px-5 sticky top-0 bg-[rgba(255,255,255,.5)] z-[1000]`}
      >
        <div className='flex'>
         
          <img
            src={require("../images/ohare.png")}
            alt='ohare'
            style={{ width: imgSize, height: imgSize }}
          />
        </div>

          {/* <Button
            className='!bg-white !rounded-full !normal-case !font-semibold !h-[40px] !min-w-[142px] sm:!min-w-none  !text-accent'
            onClick={() => setConnectDialogOpen(true)}
          >
            Connect
          </Button> */}
        
      </div>
    </>
  );
}
