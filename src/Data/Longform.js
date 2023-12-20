
function getDriveFileId(driveUrl) {
  const fileIdMatch = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  return fileIdMatch ? fileIdMatch[1] : null;
}

const videoUrl1 = "https://drive.google.com/uc?id=1ZxMSWmIGW1diWRkm2SbzLERWKAV8AiG-";
const fileId1 = getDriveFileId(videoUrl1);
export  const LongForm = [
  {
    title: "Video 1",
    videoUrl: "https://drive.google.com/uc?id=1M3BB_ztQPVtnn3K0n_psnEd2xzxW_sNW",
  },
  {
    title: "Video 2",
    videoUrl: "https://drive.google.com/uc?id=12mLsKT-PadK0BelfcDekL4mMBskdHhDZ",

  },
  {
    title: "Video 3",
    videoUrl: "https://drive.google.com/uc?id=1eUnWd-L8xIgcrLYqopwYxwSwDP-s7jOA",

  },
  {
    title: "Video 4",
    videoUrl: "https://drive.google.com/uc?id=1X_9pIeBVs9FdDHV9T2YWONfKmjJEzUZZ",

  },
  {
    title: "Video 5",
    videoUrl: "https://drive.google.com/uc?id=1zH_dxcdg2fgu-ZFaOZIhPE_dI6VMI1XS",
  
  },
  {
    title: "Video 6",
    videoUrl: "https://drive.google.com/uc?id=1iDGe0ix6CBIm5SPtjnVzYTJZ75VX3gpj",
  
  },
  // Add more projects with video URLs and poster image URLs
];

export default LongForm;