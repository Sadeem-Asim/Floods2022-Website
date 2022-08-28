import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";

export default function Popover({ Button }) {
  return (
    <MDBPopover
      size="lg"
      color="danger"
      btnChildren="Dismissible popover"
      dismiss
    >
      <MDBPopoverHeader>Popover title</MDBPopoverHeader>
      <MDBPopoverBody>
        And here's some amazing content. It's very engaging. Right?
      </MDBPopoverBody>
    </MDBPopover>
  );
}
