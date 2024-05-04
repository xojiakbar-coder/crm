import DateTimePicker from "./DateTimePicker";
import GenericSelect from "./Select";
import Time from "./Time";
import { Container, Input, InputWrapper, SearchIcon, Section } from "./style";

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input type="text" placeholder="Search" />
      </InputWrapper>
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
