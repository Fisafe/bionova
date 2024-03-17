import axios from 'axios';

export const putObject = async (key, file, mimeType) => {
  
  const formData = new FormData();
  formData.append('file', file);
  const options = {
    method: 'POST',
    url: "https://api.flyzapp.com/files",
    headers: {
      'Content-Type': 'multipart/form-data',
      'User-Agent': 'insomnia/8.2.0',
      'x-file-name': encodeURI(key),
      'x-file-type': mimeType,
    },
    data: formData,
  };
 const result = await axios.request(options).then(function (response) {
    return response.data
  }).catch(function (error) {
    return error.message
  });
  return result
}
