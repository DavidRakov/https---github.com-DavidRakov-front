import { FC } from "react";
import { DonorType } from "../layout/interfaces/donorInterface";
import TableRowBody from "./TableRow";

type TableRowBodyProps = {donors  :DonorType[]};

const TableBody: FC<TableRowBodyProps> = ({donors}) => {
  return <tbody>
  {donors.map((donor,index)=> 
  <TableRowBody key={index} donor={donor}/>
  )}
  </tbody>;
};

export default TableBody;