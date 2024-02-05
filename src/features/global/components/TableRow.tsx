import { FC } from "react";
import { TableCell, TableRow } from "../styles/components/TableStyled";
import { DonorType } from "../layout/interfaces/donorInterface";
import ButtonComponent from "./ButtonComponent";
import { Button } from "../styles/components/Button.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/models/routes";

type TableRowBodyProps = { donor: DonorType };

const TableRowBody: FC<TableRowBodyProps> = ({ donor }) => {
  const navigate = useNavigate();

  return (
    <>
      <TableRow>
        <TableCell>
          {donor.firstName} {donor.lastName}
        </TableCell>
        <TableCell>{donor.address.street}</TableCell>
        <TableCell>{donor.address.streetNumber}</TableCell>
        <TableCell>{donor.phone}</TableCell>
        <TableCell>
          <Button onClick={() => navigate(ROUTES.RUNWAY)}>add donation</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableRowBody;
