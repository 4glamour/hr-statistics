import { Container } from '../components/Container/Container';
import { PhotoBg } from '../components/PhotoBg/PhotoBg';
import { Form } from '../components/Form/Form';

export default function Scripts({ photo }) {
  return (
    <PhotoBg photo={photo}>
      <Container>
        <Form />
      </Container>
    </PhotoBg>
  );
}
