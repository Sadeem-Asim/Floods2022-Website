import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";
import "./popper.scss";
export default function Popover({ Button }) {
  return (
    <MDBPopover
      size="lg"
      color="danger"
      btnChildren="Dismissible popover"
      dismiss
      className="popper"
    >
      <MDBPopoverHeader className="popper-header">
        Popover title
      </MDBPopoverHeader>
      <MDBPopoverBody className="popper-body">
        And here's some amazing content. It's very engaging. Right?
      </MDBPopoverBody>
    </MDBPopover>
  );
}
