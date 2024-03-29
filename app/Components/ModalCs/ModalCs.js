import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import Image from "next/image";
import Rate from "../FeaturedProducts/Rate";
import CloseIcon from "@mui/icons-material/Close";
import Counter from "../DealDay/Counter";
import CounterCart from "./CounterCart";
function ModalCs({ open, setOpen, data }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container sx={style}>
            {/* close btn Modal */}
          <Button sx={{position:'absolute'}} className=" left-0 top-4" onClick={()=>handleClose()}>
            <CloseIcon sx={{ color: "red" }} />
          </Button>
          <Grid item xs={6}>
            <Image src={data.src} alt={"image"}/>
          </Grid>
          <Grid item xs={6}>
            {/* Title */}
            <span className="text-2xl font-semibold">{data?.title}</span>
            {/* Price */}
            <div className="mt-4 mb-4">
              <span className="text-xl  font-medium mx-2">${data.price}</span>
              <span className="text-xl  font-medium text-gray-500 mx-2 line-through">
                ${data.priceOff}
              </span>
            </div>
            {/* Rate */}
            <Rate value={data.rate} />
            {/* description */}
            <p>{data.description}</p>
            <CounterCart data={data}/>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

export default ModalCs;
