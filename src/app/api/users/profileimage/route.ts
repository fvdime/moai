import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { File } from "buffer";
import error from "@/libs/error-handler";
import httpStatus from "http-status";
import uploadImage from "@/libs/upload-image";

export async function POST(req: NextRequest) {
  try {
    const userId = String(req?.headers.get("id"));

    const formData = await req.formData();
    const fileData = formData.get("image") as FormDataEntryValue;

    if (!fileData || !(fileData instanceof File)) {
      return NextResponse.json({ success: false });
    }

    const res: any = await uploadImage({
      file: fileData,
    });

    console.log(res?.result?.$metadata?.httpStatusCode);

    if (res?.result?.$metadata?.httpStatusCode != 200) {
      return NextResponse.json(
        { success: false },
        { status: httpStatus.BAD_REQUEST }
      );
    }

    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        profileImage: res.filePath,
      },
      select: {
        bio: true,
        profileImage: true,
        id: true,
        email: true,
        username: true,
      },
    });

    return NextResponse.json({ success: true, user: updateUser });
  } catch (err) {
    console.log(err);
    return error({
      error: err,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
