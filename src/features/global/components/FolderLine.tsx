import { FC } from "react";
import { BoxStyled } from "../styles/components/BoxStyled";
import { Typography } from "../styles/components/TypographyStyled";

type FolderHeadLineProps = {folderNum :number,numAddresses:number,folderArea:string,sum:number};

const FolderHeadLine: FC<FolderHeadLineProps> = ({folderNum,numAddresses,folderArea,sum}) => {
  return       <BoxStyled dir="rtl" style={{ justifyContent: "space-around",width:"100%" }}>
  <Typography component="h3">מס תיקייה: {folderNum}</Typography>
  <Typography component="h3">אזור תיקייה: {folderArea}</Typography>
  <Typography component="h3">כמות כתובות: {numAddresses}</Typography>
  <Typography component="h3">סוג תיקייה: טלפונית</Typography>
  <Typography component="h3">סכום שנאסף מתיקייה זו: {sum}</Typography>
</BoxStyled>;
};

export default FolderHeadLine;