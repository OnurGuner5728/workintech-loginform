import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormContainer = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Geçerli bir e-posta adresi giriniz')
    .required('E-posta adresi zorunludur'),
  password: Yup.string()
    .min(8, 'Şifre en az 8 karakter uzunluğunda olmalıdır')
    .matches(/[A-Za-z]/, 'En az bir harf içermelidir')
    .matches(/[0-9]/, 'En az bir rakam içermelidir')
    .matches(/[!@#$%^&*.]/, 'En az bir özel karakter içermelidir')
    .required('Şifre zorunludur'),
  acceptTerms: Yup.boolean()
    .oneOf([true], 'Şartları kabul etmelisiniz')
    .required('Şartları kabul etmelisiniz'),
});

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      acceptTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      navigate('/success');
    },
  });

  return (
    <Container>
      <FormContainer onSubmit={formik.handleSubmit}>
        <h2>Giriş Yap</h2>
        
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-posta"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorText>{formik.errors.email}</ErrorText>
          )}
        </div>

        <div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Şifre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorText>{formik.errors.password}</ErrorText>
          )}
        </div>

        <CheckboxContainer>
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.acceptTerms}
          />
          <label htmlFor="acceptTerms" style={{ marginLeft: '8px' }}>
            Şartları kabul ediyorum
          </label>
        </CheckboxContainer>
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <ErrorText>{formik.errors.acceptTerms}</ErrorText>
        )}

        <Button 
          type="submit" 
          disabled={!formik.isValid || !formik.values.acceptTerms}
        >
          Giriş Yap
        </Button>
      </FormContainer>
    </Container>
  );
} 