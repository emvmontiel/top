// Task given on March 12 2026
// Sent on Telegram

function getFileType(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);

  // PNG: 89 50 4E 47
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
    return "image/png";
  }

  // JPEG: FF D8 FF
  if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
    return "image/jpeg";
  }

  // GIF: 47 49 46 38
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    return "image/gif";
  }

  // PDF: 25 50 44 46
  if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
    return "application/pdf";
  }

  // ZIP: 50 4B 03 04 or 50 4B 05 06 or 50 4B 07 08
  if (bytes[0] === 0x50 && bytes[1] === 0x4B && [0x03, 0x05, 0x07].includes(bytes[2]) && [0x04, 0x06, 0x08].includes(bytes[3])) {
    return "application/zip";
  }

  // MP3: FF FB or ID3
  if ((bytes[0] === 0xFF && bytes[1] === 0xFB) || (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33)) {
    return "audio/mpeg";
  }

  // MP4: starts with ftyp (66 74 79 70)
  if (bytes[4] === 0x66 && bytes[5] === 0x74 && bytes[6] === 0x79 && bytes[7] === 0x70) {
    return "video/mp4";
  }

  return "unknown";
}

async function postMethod(formdata, xtk){
  const xbody = Object.fromEntries(formdata);
  //office obj
  let xresult = {};
  
  if (xbody.trans2 == "attachment") {
    //add a new instance of office
    const imgfile = formdata.get('imagefile');
    const xattachment = new Attachment();
    if (imgfile.size > 0){
        xbody.imagename = imgfile.name;
        xresult = await xattachment.insertattachment(xbody, xtk);
        if (xresult) {
            if (xresult.imagename > ""){
                const fileBuff = await imgfile.arrayBuffer();
                const fileType = getFileType(fileBuff);
                if (fileType == "image/jpeg"  fileType == "image/png"  fileType == "image/gif" || fileType == "application/pdf" ) {
                  await uploadFile("attachments", xresult.imagename ,Buffer.from(fileBuff));
                } else {
                  await xattachment.deleteattachment(xresult._id, xtk);
                  throw new Error("Invalid file type. Only images and PDF are allowed.");
                }
            }
        }
    }
}
return xresult;
}