import { Features } from "./components/sections/features";
import { Container } from "./components/ui/Container";
import { VSpace } from "./components/ui/VSpace";

export default function Home() {
  return (
    <Container>
      <VSpace>
        <Features />
      </VSpace>
    </Container>
  );
}
