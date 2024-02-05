import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DONORS } from "../global/layout/graphQL/donorsQueries";
import { DonorType } from "../global/layout/interfaces/donorInterface";
import Spinner from "../global/spinner/Spinner";
import { Container } from "../global/styles/components/ContainerStyled";
import FolderHeadLine from "../global/components/FolderLine";
import { BoxStyled } from "../global/styles/components/BoxStyled";
import { Typography } from "../global/styles/components/TypographyStyled";
import GroupTable from "../global/layout/main/GroupTable";
import {
  StyledTable,
  TableHeader,
  TableRow,
} from "../global/styles/components/TableStyled";
import TableBody from "../global/components/TableBody";

const col = ["שם מלא", "כתובת", "מספר", "טלפון", ""];

const FolderPage = () => {
  const { data, loading, error } = useQuery(GET_DONORS);
  const [sum, setSum] = useState(0);
  const [donors, setDonors] = useState<DonorType[]>([]);

  useEffect(() => {
    if (data && data.findAllDonors) {
      setDonors(data.findAllDonors);
    }
  }, [data]);

  if (loading) return <Spinner />;
  return (
    <Container style={{ minHeight: "65vh" }}>
      <FolderHeadLine
        folderArea="ירושלים"
        folderNum={10}
        numAddresses={donors.length}
        sum={sum}
      />
      <BoxStyled>
        <Typography component="div">
          <GroupTable />
        </Typography>
        <BoxStyled style={{ overflowY: "auto", direction: "rtl" }}>
          <StyledTable dir="rtl">
            <TableRow>
              {col.map((name) => (
                <TableHeader>{name}</TableHeader>
              ))}
            </TableRow>
            <TableBody donors={donors} />
          </StyledTable>
        </BoxStyled>
      </BoxStyled>
      <BoxStyled>
        <Typography component="div">gr</Typography>
      </BoxStyled>
    </Container>
  );
};

export default FolderPage;
