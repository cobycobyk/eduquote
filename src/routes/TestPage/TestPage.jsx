import { useOutletContext } from "react-router-dom";
import { TestContainer } from "./TestPage.styles";

export default function TestPage() {
  const [currentUser, setCurrentUser] = useOutletContext();
  return (
    <TestContainer>testpage
      {currentUser?.displayname}
    </TestContainer>
  )
}
