# Login Form E2E Test Projesi

Bu proje, modern bir login formunun end-to-end testlerini içeren bir React uygulamasıdır.

## Özellikler

- React + Vite tabanlı modern uygulama
- Formik ve Yup ile form validasyonu
- Cypress ile E2E testler
- Emotion ile stil yönetimi

## Kurulum

```bash
npm install
npm run dev
```

## Testleri Çalıştırma

```bash
npm run cypress:open
```

## Validasyonlar

- Email: Geçerli email formatı
- Şifre: En az 8 karakter, bir harf, bir rakam ve bir özel karakter
- Şartlar: Kabul edilmesi zorunlu
