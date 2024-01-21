import { startLoading, stopLoading, loadingMessage } from "./loading";
import {getVideoId, loadVideo} from "./youtube-api";
import axios from "axios";

const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  try {
    
    loadingMessage('Iniciando a aplicação');
    startLoading();
    
    const formData = new FormData(form);
    const url = formData.get('url');
    
    await loadVideo(url)
    loadingMessage('Baixando e convertendo o vídeo');
    await axios.get('http://localhost:4000/audio?v=' + getVideoId(url))
  } catch (error) {
    console.log('[SUBMIT_ERROR]', error);
  } finally {
    stopLoading()
  }
})