import styled from "styled-components";
export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */
/* 
  tbody {
    vertical-align: top;
  }              */
  td,
  th {
    /* border: none; */
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    /* :nth-of-type(odd) {
      background-color: #efefef;
    } */
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #e09999;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export const Table = styled.thead`
  max-width: 10px;
  border-collapse: collapse;
  table-layout: auto;
`;
export const TableHeader = styled.th`
  padding: 4px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  /* max-width: 40; */
  min-width: 100px;
`;
export const TableRow = styled.tr`
  /* &:nth-child(even) {
    background-color: #f9f9f9;
  } */
`;
export const TableCell = styled.td`

  padding: 4px;
  border: 1px solid #ddd;
  max-width: 10px;  height: 15px;
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
`;
