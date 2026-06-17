export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('S3_ACCESS_KEY'),
          secretAccessKey: env('S3_SECRET_KEY'),
        },
        region: env('S3_REGION'),
        params: {
          Bucket: env('S3_BUCKET'),
        },
      },
      security: {
        strictSizeValidation: true,
        allowedFileTypes: {
          image: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'],
          application: [
            'application/vnd.android.package-archive', // APK
            'application/octet-stream',                // EXE, DMG
            'application/x-msdownload',               // EXE
            'application/x-apple-diskimage',          // DMG
          ],
        },
        maxSize: 1024 * 1024 * 1024, // 500MB max for APK/EXE/DMG files
        maxSizeForPrivateSize: 1024 * 1024 * 1024,
      },
    },
  },
});