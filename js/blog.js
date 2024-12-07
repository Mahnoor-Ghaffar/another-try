import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAFeRHQNfVlBiW9aS1GV2COYU_tj3gV_c",
  authDomain: "hackathon-prep-3955c.firebaseapp.com",
  databaseURL: "https://hackathon-prep-3955c-default-rtdb.firebaseio.com",
  projectId: "hackathon-prep-3955c",
  storageBucket: "hackathon-prep-3955c.firebasestorage.app",
  messagingSenderId: "925054448057",
  appId: "1:925054448057:web:564d46eb34af45cf2fc668",
  measurementId: "G-YT03TEGT0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app)




function getPostData (){
    const user_ref = ref(db,'post/');
    get(user_ref).then((snapshot)=>{
        const data = snapshot.val()
       
       let html = "";
       const table = document.querySelector('.main')
        for (const key in data){
          const{title,post_content} = data[key]
  
          console.log(post_content);
         
         
           html+= `
           <div class="post"> 
               <h2>${title}</h2>
               <p>
                 ${post_content}
               </p>
           </div>
          `
  
        }
  table.innerHTML =html
  
    })
  }
  
  getPostData()
  