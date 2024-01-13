This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Env

```bash
DATABASE_URL="<DATABASE URL>"
AWS_ACCESS_KEY_ID="<AWS ACCESS KEY ID>"
AWS_SECRET_ACCESS_KEY="<AWS SECRET KEY ID>"
BUCKET_NAME="<AWS S3 BUCKET NAME>"
AWS_REGION="<AWS REGION>"
NEXT_PUBLIC_API_BASE="http://localhost:3000"
AWS_BUCKET_URL="<AWS BUCKET URL>" #exapmle: https://<bucket_name>.s3.eu-central-1.amazonaws.com/
```
