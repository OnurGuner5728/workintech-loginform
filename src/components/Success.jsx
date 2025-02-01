import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SuccessMessage = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
`;

export default function Success() {
  return (
    <Container>
      <SuccessMessage>
        <h1>Başarıyla Giriş Yapıldı! 🎉</h1>
        <p>Hoş geldiniz!</p>
      </SuccessMessage>
    </Container>
  );
} 