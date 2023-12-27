
function getDriveFileId(driveUrl) {
    const fileIdMatch = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    return fileIdMatch ? fileIdMatch[1] : null;
  }
  
  const videoUrl1 = "https://drive.google.com/uc?id=1ZxMSWmIGW1diWRkm2SbzLERWKAV8AiG-";
  const fileId1 = getDriveFileId(videoUrl1);
  export  const Automation = [
    {
      title: "Movie Recap Edit",
      videoUrl: "https://drive.google.com/uc?id=1wbxH4EQNv1ZqCQLvYKflPxZOGIfrAhh2",
    },
    {
      title: "Documentary Edit",
      videoUrl: "https://drive.google.com/uc?id=15SY4Fus2Bv0N7WsRcQQSasun1u463Qlv",
  
    },
    {
      title: "Celebrity Niche Edit",
      videoUrl: "https://drive.google.com/uc?id=1XB6UYE0AFHTHsf3rEli9cekfJXSpB7W0",
  
    },
    {
      title: "Sports-Basketball Edit",
      videoUrl: "https://drive.google.com/uc?id=1wLgPUz3u2IlCVObnKORMdBOHhTwJOSVZ",
  
    },
    
  
    // Add more projects with video URLs and poster image URLs
  ];
  
  export default Automation;