import { useEffect, useState } from "react";
import { BoxStyled } from "../../styles/components/BoxStyled";
import { Container } from "../../styles/components/ContainerStyled";
import {
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
} from "../../styles/components/TableStyled";
import { Typography } from "../../styles/components/TypographyStyled";
import { useQuery } from "@apollo/client";
import {  GET_DONORS} from "../graphQL/donorsQueries";
import { DonorType } from "../interfaces/donorInterface";
import Spinner from "../../spinner/Spinner";
import { ButtonStyled } from "../../styles/components/ButtonStyled";
import GroupTable from "./GroupTable";
import { Button } from "../../styles/components/Button.styled";


const col = [
  "שם מלא",
  "כתובת",
  "מספר",
  "טלפון",
""
  // "קבלה",
  // "הערה",
  // "סוג תרומה",
  // "סכום",

];


const MainPage = () => {
  const {data,loading,error} = useQuery(GET_DONORS)
  const [sum,setSum] = useState(0)
  const [donors,setDonors] = useState<DonorType[]>([])
  
  useEffect(()=>{
      console.log(data);

    if (data && data.findAllDonors){
      console.log("aaa");
      
      setDonors(data.findAllDonors)
    }
  },[data])
  if (loading) return <Spinner/>
  return (
    <Container style={{ minHeight: "65vh" }}>
      <BoxStyled dir="rtl" style={{ justifyContent: "space-around" }}>
        <Typography component="h3">מס תיקייה: 132</Typography>
        <Typography component="h3">אזור תיקייה: ירושלים</Typography>
        <Typography component="h3">כמות כתובות: {donors.length}</Typography>
        <Typography component="h3">סוג תיקייה: טלפונית</Typography>
        <Typography component="h3">סכום שנאסף מתיקייה זו: {sum}</Typography>
      </BoxStyled>
      <BoxStyled>
      <Typography component="div">
          <GroupTable/>
        </Typography>
        <BoxStyled style={{ overflowY: "auto",direction:"rtl" }}>
          <StyledTable dir="rtl">
            <TableRow>
              {col.map((name) => (
                <TableHeader>{name}</TableHeader>
              ))}
            </TableRow>
            <tbody>
            {donors.map((item,index) => (
              <TableRow key={index}>
                <TableCell>{item.firstName} {item.lastName}</TableCell>
                <TableCell>{item.address.street}</TableCell>
                <TableCell>{item.address.streetNumber}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell><Button>fd</Button></TableCell>

                
              </TableRow>
            ))}</tbody>
          </StyledTable>
        </BoxStyled>

      </BoxStyled>
      <BoxStyled>
        <Typography component="div">gr</Typography>
      </BoxStyled>
    </Container>
  );
};

export default MainPage;
