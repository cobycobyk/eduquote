import { MulticolorButton } from "../../components/Buttons/Buttons";
import { TestContainer } from "./TestPage.styles";
import instance, {emulator} from "../../axios";

export default function TestPage() {
  const test = async () => {
    const response = await instance({
      method: 'post',
      url: "/users/create",
      data: {
        email: 'test@email.com'
      }
    });
    console.log(response.data)
  }
  return (
    <TestContainer>
      <MulticolorButton input="multi" />
      <button onClick={test}>test</button>
    </TestContainer>
  );
}
