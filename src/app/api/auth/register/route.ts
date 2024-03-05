import prisma from "@/libs/prisma";
import { NextResponse, NextRequest } from "next/server";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import error from "@/libs/error-handler";
import { z } from "zod";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/libs/auth";
import { expTime } from "@/libs/commons";

const createSchema = z.object({
  username: z.string().regex(new RegExp(/^[a-zA-Z0-9-]{3,30}$/)),
  password: z.string().min(6),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const isValidData = createSchema.parse(body);

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: isValidData.email }, { username: isValidData.username }],
      },
    });

    if (user) {
      if (user?.email === isValidData.email) {
        return error({
          statusCode: httpStatus.CONFLICT,
          message: "Mail exists",
        });
      } else {
        return error({
          statusCode: httpStatus.CONFLICT,
          message: "Username exists",
        });
      }
    }

    const hash = await bcrypt.hash(isValidData.password, 10);

    const savedUser = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        createdAt: new Date(Date.now()),
        password: hash,
      },
      select: {
        username: true,
        email: true,
        id: true,
      },
    });

    if (savedUser) {
      const token = await new SignJWT({
        id: savedUser.id,
        username: savedUser.username,
        email: savedUser.email,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("4h")
        .sign(getJwtSecretKey());

      const response = NextResponse.json(
        { success: true, user: savedUser, token },
        { status: 201, headers: { "content-type": "application/json" } }
      );

      response.cookies.set({
        name: "token",
        value: token,
        path: "/",
        expires: Date.now() + expTime,
      });

      return response;
    }

    return error({
      statusCode: httpStatus.BAD_REQUEST,
      message: "User not created",
    });
  } catch (err) {
    return error({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      error: err,
    });
  }
}
