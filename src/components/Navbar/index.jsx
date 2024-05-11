import GenericInput from "../Generic/Input";
import DateTimePicker from "./DateTimePicker";
import GenericSelect from "./Select";
import Time from "./Time";
import { Container, SearchIcon, Section } from "./style";

const Navbar = () => {
  return (
    <Container>
      <GenericInput
        width={300}
        height={40}
        borderRadius={8}
        iconleft={<SearchIcon />}
        placeholder="Search"
      />
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
