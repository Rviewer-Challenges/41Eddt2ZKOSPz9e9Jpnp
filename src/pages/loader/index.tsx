import { Wrapper } from "../../styled-components/utils";
import Logo from "../../assets/logo";
import { LoaderCOntainer, Spin, SpinContainer } from "./styles";

type spinerProps = {
  id: number;
  type: "default" | "focus"
}

const spinerList: spinerProps[] = [
  { id: 1, type: "focus" },
  { id: 2, type: "default" },
  { id: 3, type: "default" },
  { id: 4, type: "default" },
  { id: 5, type: "default" },
  { id: 6, type: "default" },
  { id: 7, type: "default" },
]

export function Loader() {
  return (
    <Wrapper>
      <LoaderCOntainer>
        <Logo />
        
        <SpinContainer>
          {spinerList.map((spiner) => 
            (<Spin 
              key={spiner.id} 
              type={spiner.type} />)
          )}
        </SpinContainer>
      </LoaderCOntainer>
    </Wrapper>
  )
}
