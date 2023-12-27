
function getDriveFileId(driveUrl) {
  const fileIdMatch = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  return fileIdMatch ? fileIdMatch[1] : null;
}

const videoUrl1 = "https://drive.google.com/uc?id=1ZxMSWmIGW1diWRkm2SbzLERWKAV8AiG-";
const fileId1 = getDriveFileId(videoUrl1);
export  const LongForm = [
  {
    title: "Explainer Edit",
    videoUrl: "https://drive.google.com/uc?id=1M3BB_ztQPVtnn3K0n_psnEd2xzxW_sNW",
  },
  {
    title: "Explainer Edit-2",
    videoUrl: "https://drive.google.com/uc?id=1X_9pIeBVs9FdDHV9T2YWONfKmjJEzUZZ",

  },
  {
    title: "Podcast Edit",
    videoUrl: "https://drive.google.com/uc?id=19bQGOjLFAIsjuZAFXEpG3tCfKnWDUYOm",

  },
  {
    title: "Challenge Video Edit",
    videoUrl: "https://drive.google.com/uc?id=1eUnWd-L8xIgcrLYqopwYxwSwDP-s7jOA",

  },
  {
    title: "Wedding Edit",
    videoUrl: "https://drive.google.com/uc?id=1YdGnk4413KU_BOIfBfYdo_7zhMW61Krd",

  },
  
  {
    title: "Real Estate Edit",
    videoUrl: "https://drive.google.com/uc?id=1zH_dxcdg2fgu-ZFaOZIhPE_dI6VMI1XS",
  
  },
  {
    title: "Travel Vlog edit",
    videoUrl: "https://drive.google.com/uc?id=1iDGe0ix6CBIm5SPtjnVzYTJZ75VX3gpj",
  
  },
  {
    title: "AD-Edit",
    videoUrl: "https://drive.google.com/uc?id=1CSbdFILqQbxzm1aQO4wi1i6KfPQX6i4a",
  
  },
  // Add more projects with video URLs and poster image URLs
];

export default LongForm;