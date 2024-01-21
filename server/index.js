import express from 'express';
import cors from 'cors';
import {downloader} from "./download-video.js";
import {createMP3} from "./create-mp3.js";

const app = express();
app.use(cors());

app.get('/audio', async (request, response) => {
  const videoId = request.query.v;
  
  try {
    await downloader(videoId);
    await createMP3()
    return response.send('ok');
  } catch (error){
    console.log(error);
    return response.send(error);
  }
  
})

app.listen(4000, () => {
  console.log('server up')
})