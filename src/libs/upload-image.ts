import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    //@ts-ignore
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadImage = async function ({
    fileName,
    file,
    // fileBody,
    fileContent,
    bucketName,
}: {
    fileName?: string;
    // fileBody: Buffer;
    file: File | FormDataEntryValue;
    fileContent?: string;
    bucketName?: string;
}) {
    if (!file || !(file instanceof File)) {
        return null;
    }
    if (!fileName) fileName = file.name;
    if (!bucketName) bucketName = process.env.BUCKET_NAME;
    if (!fileContent) {
        const fileContentArray = fileName.split('.');
        fileContent = fileContentArray[fileContentArray.length - 1];
    }
    fileName = uuidv4() + fileName;
    const fileBody: ArrayBuffer = await file.arrayBuffer();
    return await s3.send(
        new PutObjectCommand({
            Bucket: bucketName,
            Key: fileName,
            Body: Buffer.from(fileBody),
            ContentType: `image/${fileContent}`,
        })
    );
};

export default uploadImage;
