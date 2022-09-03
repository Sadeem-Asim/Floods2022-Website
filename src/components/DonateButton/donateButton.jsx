import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./donateButton.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { CgCloseO } from "react-icons/cg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50rem",
  height: "40rem",
  bgcolor: "white",
  border: "5px solid var(--primary-color-light)",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const DonateButton = ({ text }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MDBBtn id="donate-button" onClick={() => setActive(true)}>
        {text}
      </MDBBtn>
      <div>
        <Modal
          keepMounted
          open={active}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <button className="modal-button" onClick={() => setActive(false)}>
              <CgCloseO />
            </button>
            <Typography
              className="modal-title"
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Donate And Save People
            </Typography>
            <Typography
              className="modal-description"
              id="keep-mounted-modal-description"
              sx={{ mt: 2 }}
            >
              Your Donation Matters
            </Typography>
            <div class="form-outline modal-input">
              <input type="text" id="formControlDefault" class="form-control" />
              <label class="form-label" for="formControlDefault">
                Name
              </label>
            </div>
            <div class="form-outline modal-input">
              <input type="text" id="formControlDefault" class="form-control" />
              <label class="form-label" for="formControlDefault">
                Email
              </label>
            </div>
            <div class="form-outline modal-input">
              <input type="text" id="formControlDefault" class="form-control" />
              <label class="form-label" for="formControlDefault">
                Amount
              </label>
            </div>
          </Box>
        </Modal>
      </div>
      );
    </>
  );
};

export default DonateButton;
// ethereum.request({
//   method: 'wallet_addEthereumChain',
//   params: [{
//       chainId: web3.utils.toHex('137'),
//       chainName: 'Polygon',
//       nativeCurrency: {
//           name: 'MATIC',
//           symbol: 'MATIC',
//           decimals: 18
//       },
//       rpcUrls: ['https://polygon-rpc.com'],
//       blockExplorerUrls: ['https://www.polygonscan.com']
//   }],
// })
// .then(() => console.log('network added'))
// .catch(() => console.log('could not add network'))
