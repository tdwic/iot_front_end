import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableCell>ID</TableCell>
        <TableCell>Recorded Distance</TableCell>
        <TableCell>Date</TableCell>
      </TableHead>
      <TableBody>
        {data.map(({ id, distancValue, createdDate }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{distancValue}</TableCell>
            <TableCell>{createdDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
