// export function getDriveFileId(driveUrl) {
//     const fileIdMatch = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)\//);
//     return fileIdMatch ? fileIdMatch[1] : null;
//   }
  
//  export  async function getDriveFiles(folderUrl) {
//     const folderId = getDriveFileId(folderUrl);
    
//     if (!folderId) {
//       console.error('Invalid Google Drive URL');
//       return [];
//     }
  
//     try {
//       const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents`);
//       const data = await response.json();
  
//       const folderName = data.files[0].parents[0].name; // Extract the folder name
//       console.log(folderName);
//       return data.files.map(file => ({
//         title: `${folderName} - ${file.name}`, // Combine folder name and file name
//         videoUrl: `https://drive.google.com/uc?id=${file.id}`,
//       }));
//     } catch (error) {
//       console.error('Error fetching Google Drive files:', error);
//       return [];
//     }
//   }

