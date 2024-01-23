import { BoxStyled } from "../../styles/components/BoxStyled"
import { StyledTable, TableRow, TableHeader, TableCell } from "../../styles/components/TableStyled"

const group = [{
    "number": 5,
    "firstName": "יהונתן",
    "lastName": "אוחנה",
    "class": "ג"
   },
   {
    "number": 9,
    "firstName": "מיכאל",
    "lastName": "אייזן",
    "class": "ג"
   },
   {
    "number": 12,
    "firstName": "אברהם",
    "lastName": "אלנדאף",
    "class": "ג"
   },
   {
    "number": 14,
    "firstName": "אהרון",
    "lastName": "אסולין",
    "class": "ג"
   },
   {
    "number": 18,
    "firstName": "צבי",
    "lastName": "אפשטיין",
    "class": "ג"
   }]
const col = ["שם מלא","טלפון","ועד"]

const GroupTable = ()=> {
    return(
        <BoxStyled>
        <BoxStyled style={{ overflowY: "auto", height: "300px",direction:"rtl" }}>
          <StyledTable dir="rtl">
            <TableRow>
              {col.map((name) => (
                <TableHeader>{name}</TableHeader>
              ))}
            </TableRow>
            <tbody>
            {group.map((item,index) => (
              <TableRow key={index}>
                {/* <TableCell>
                  <input type="checkbox" />
                </TableCell> */}
                {/* <TableCell>{item.}</TableCell> */}
                {/* <TableCell>{item}</TableCell> */}
                {/* <TableCell>
                  <input
                  type="number"
                  value={0}
                  style={{ width: "50px" }}
                  />
                </TableCell> */}
                <TableCell>{item.firstName} {item.lastName}</TableCell>
                <TableCell>{" "}</TableCell>
                <TableCell>{item.class}</TableCell>
                
              </TableRow>
            ))}</tbody>
          </StyledTable>
        </BoxStyled>{" "}
      </BoxStyled>
    )
}

export default GroupTable