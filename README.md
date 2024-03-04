# MOAI

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Moai is a question-and-answer website for programmers</h3>

  <p align="center">
    <a href="https://eloquent-ruddy.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/fvdime/moai/issues">Report Bug</a>
    ·
    <a href="https://github.com/fvdime/moai/issues">Request Feature</a>
    ·
    <a href="https://moai-ten.vercel.app/">Live Demo</a>
  </p>
</div>

### Built With

- Next JS
- Next API Routes
- Amazon S3
- Prisma
- Mongo DB
- Tailwind CSS

<p align="right">(<a href="#readme-top">↑</a>)</p>

## Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/fvdime/moai.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Add .env file:

   ```bash
   DATABASE_URL="<DATABASE URL>"
   AWS_ACCESS_KEY_ID="<AWS ACCESS KEY ID>"
   AWS_SECRET_ACCESS_KEY="<AWS SECRET KEY ID>"
   BUCKET_NAME="<AWS S3 BUCKET NAME>"
   AWS_REGION="<AWS REGION>"
   NEXT_PUBLIC_API_BASE="<PROJECT_BASE_URL>" #example: http://locahost:3000
   AWS_BUCKET_URL="<AWS BUCKET URL>" #exapmle: https://<bucket_name>.s3.eu-central-1.amazonaws.com/
   ```

4. Prisma Commands:

   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

<p align="right">(<a href="#readme-top">↑</a>)</p>

### Contact

<!-- Fadime or Faya - fadime.dogrulj@gmail.com -->

Project Link: [https://github.com/fvdime/moai](https://github.com/fvdime/moai)

<p align="right">(<a href="#readme-top">↑</a>)</p>

### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">↑</a>)</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
