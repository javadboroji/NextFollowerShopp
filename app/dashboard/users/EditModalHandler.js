import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { Grid, MenuItem, TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function EditModalHandler({ data, open, setOpen }) {
  const handleClose = () => setOpen(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  useEffect(() => {
    console.log(data);
     setValue(
   [ {    userName: data?.userName || ""}]
    )
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  type="text"
                  label="نام کاربری"
                  variant="outlined"
                  {...register("userName")}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  type="text"
                  label="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  type="tel"
                  label="Mobile number"
                  {...register("Mobile number", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  fullWidth
                  type="text"
                  label="role"
                  {...register("role", {})}
                />
              </Grid>
              <Grid xs={12} lg={4}>
                <TextField
                  select
                  fullWidth
                  label="وضعیت"
                  variant="filled"
                  {...register("status")}
                >
                  <MenuItem key={"فعال"} value="فعال">
                    فعال
                  </MenuItem>
                  <MenuItem key={"غیرفعال"} value="غیرفعال">
                    غیرفعال
                  </MenuItem>
                  <MenuItem key={"درانتظارتایید"} value="درانتظارتایید">
                    درانتظارتایید
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid xs={12} lg={4}>
                <button className=" banner-slider-btn relative py-5 my-4 px-12 lg:py-6 lg:px-24 mx-2 text-sm lg:text-1xl lg:font-bold rounded-xl text-stone-100 btn-golbal">
                  <span
                    className={
                      "absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10"
                    }
                  >
                    ارسال
                  </span>
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModalHandler;
