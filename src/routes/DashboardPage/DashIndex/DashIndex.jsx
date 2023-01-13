import dash from "../../../assets/images/Dashboard/dashindex.png";
import { DashImg, DIContainer } from "./DashIndex.styles";

export default function DashIndex() {
  return (
    <DIContainer>
      <DashImg src={dash} alt="index"/>
    </DIContainer>
    
  );
}
