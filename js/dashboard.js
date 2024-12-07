// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { getDatabase, ref, set, get, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCAFeRHQNfVlBiW9aS1GV2COYU_tj3gV_c",
//   authDomain: "hackathon-prep-3955c.firebaseapp.com",
//   databaseURL: "https://hackathon-prep-3955c-default-rtdb.firebaseio.com",
//   projectId: "hackathon-prep-3955c",
//   storageBucket: "hackathon-prep-3955c.firebasestorage.app",
//   messagingSenderId: "925054448057",
//   appId: "1:925054448057:web:564d46eb34af45cf2fc668",
//   measurementId: "G-YT03TEGT0T"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(app);

// // DOM Elements
// const my_blog = document.querySelector('.my_blog');
// const login_page = document.querySelector('.login');
// const notify = document.querySelector('.notifiy');
// const postBtn = document.querySelector('#post_btn');
// const tbody = document.querySelector('tbody');
// const profileImageInput = document.querySelector('#profile_image');

// let editKey = null;
// let uploadedImageURL = "";

// // Authentication Handling
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         my_blog.classList.remove('hide');
//         login_page.classList.add('hide');
//         fetchPosts();
//     } else {
//         my_blog.classList.add('hide');
//         login_page.classList.remove('hide');
//     }
// });

// // Sign-In
// document.querySelector('#sign_in').addEventListener('click', () => {
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then(() => notify.innerHTML = "Signed In")
//         .catch(() => notify.innerHTML = "Invalid Credentials");
// });

// // Sign-Out
// document.querySelector('#logout').addEventListener('click', () => {
//     signOut(auth).then(() => notify.innerHTML = "Signed Out");
// });

// // Add or Update Post
// postBtn.addEventListener('click', () => {
//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#post_content').value.trim();
//     const file = profileImageInput.files[0];

//     if (!title || !content) {
//         notify.innerHTML = "All fields are required!";
//         return;
//     }

//     // Convert image to Base64 URL
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             uploadedImageURL = reader.result;

//             const key = editKey || Date.now();
//             savePostToDatabase(key, title, content, uploadedImageURL);
//         };
//         reader.readAsDataURL(file);
//     } else {
//         const key = editKey || Date.now();
//         savePostToDatabase(key, title, content, uploadedImageURL);
//     }
// });

// function savePostToDatabase(key, title, content, imageURL) {
//     set(ref(db, `posts/${key}`), { title, content, imageURL }).then(() => {
//         notify.innerHTML = editKey ? "Post Updated" : "Post Added";
//         resetForm();
//         fetchPosts();
//     });
// }

// // Fetch Posts
// function fetchPosts() {
//     get(ref(db, 'posts')).then((snapshot) => {
//         const posts = snapshot.val();
//         tbody.innerHTML = '';

//         if (posts) {
//             Object.entries(posts).forEach(([key, { title, content, imageURL }]) => {
//                 const row = `<tr>
//                     <td>${title}</td>
//                     <td>${content}</td>
//                     <td>
//                         <img src="${imageURL || 'default-avatar.png'}" alt="Profile" class="profile_image">
//                     </td>
//                     <td>
//                         <button onclick="editPost('${key}')">Edit</button>
//                         <button onclick="deletePost('${key}')">Delete</button>
//                     </td>
//                 </tr>`;
//                 tbody.insertAdjacentHTML('beforeend', row);
//             });
//         } else {
//             tbody.innerHTML = "<tr><td colspan='4'>No posts found!</td></tr>";
//         }
//     });
// }

// // Delete Post
// window.deletePost = (key) => {
//     remove(ref(db, `posts/${key}`)).then(() => {
//         notify.innerHTML = "Post Deleted";
//         fetchPosts();
//     });
// };

// // Edit Post
// window.editPost = (key) => {
//     get(ref(db, `posts/${key}`)).then((snapshot) => {
//         const { title, content, imageURL } = snapshot.val();
//         document.querySelector('#title').value = title;
//         document.querySelector('#post_content').value = content;
//         uploadedImageURL = imageURL;
//         editKey = key;
//         postBtn.innerHTML = "Update Post";
//     });
// };

// // Reset Form
// function resetForm() {
//     document.querySelector('#title').value = "";
//     document.querySelector('#post_content').value = "";
//     profileImageInput.value = "";
//     uploadedImageURL = "";
//     editKey = null;
//     postBtn.innerHTML = "Post Now";
// }










// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { getDatabase, ref, set, get, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCAFeRHQNfVlBiW9aS1GV2COYU_tj3gV_c",
//     authDomain: "hackathon-prep-3955c.firebaseapp.com",
//     databaseURL: "https://hackathon-prep-3955c-default-rtdb.firebaseio.com",
//     projectId: "hackathon-prep-3955c",
//     storageBucket: "hackathon-prep-3955c.firebaseapp.com",
//     messagingSenderId: "925054448057",
//     appId: "1:925054448057:web:564d46eb34af45cf2fc668",
//     measurementId: "G-YT03TEGT0T"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(app);

// // DOM Elements
// const my_blog = document.querySelector('.my_blog');
// const login_page = document.querySelector('.login');
// const notify = document.querySelector('.notify');
// const postBtn = document.querySelector('#post_btn');
// const logoutBtn = document.querySelector('#logout');
// const userNameDisplay = document.querySelector('#user_name');
// const tbody = document.querySelector('tbody');

// let editKey = null;

// // Authentication Handling
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         my_blog.classList.remove('hide');
//         login_page.classList.add('hide');
//         userNameDisplay.textContent = `Welcome, ${user.displayName || 'User'}`;
//         fetchPosts(user.uid);
//     } else {
//         my_blog.classList.add('hide');
//         login_page.classList.remove('hide');
//     }
// });

// // Sign-In
// document.querySelector('#sign_in').addEventListener('click', () => {
//     const email = document.querySelector('#email').value.trim();
//     const password = document.querySelector('#password').value.trim();

//     signInWithEmailAndPassword(auth, email, password)
//         .then(() => notify.innerHTML = "Signed In")
//         .catch(() => notify.innerHTML = "Invalid Credentials");
// });

// // Sign-Out
// logoutBtn.addEventListener('click', () => {
//     signOut(auth).then(() => notify.innerHTML = "Signed Out");
// });

// // Add or Update Post
// postBtn.addEventListener('click', () => {
//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#post_content').value.trim();

//     if (!auth.currentUser) {
//         notify.innerHTML = "You must be logged in to post!";
//         return;
//     }

//     if (!title || !content) {
//         notify.innerHTML = "Title and content are required!";
//         return;
//     }

//     const userId = auth.currentUser.uid;
//     const key = editKey || Date.now();
//     const publishDate = new Date().toLocaleString();

//     set(ref(db, `posts/${userId}/${key}`), { title, content, publishDate })
//         .then(() => {
//             notify.innerHTML = editKey ? "Post Updated" : "Post Added";
//             resetForm();
//             fetchPosts(userId);
//         });
// });

// // Fetch Posts
// function fetchPosts(userId) {
//     get(ref(db, `posts/${userId}`)).then((snapshot) => {
//         const posts = snapshot.val();
//         tbody.innerHTML = '';

//         if (posts) {
//             const sortedPosts = Object.entries(posts).sort((a, b) => b[0] - a[0]);

//             sortedPosts.forEach(([key, { title, content, publishDate }]) => {
//                 const row = `<tr>
//                     <td>${title}</td>
//                     <td>${content}</td>
//                     <td>${publishDate}</td>
//                     <td>
//                         <button onclick="editPost('${key}')">Edit</button>
//                         <button onclick="confirmDelete('${key}')">Delete</button>
//                     </td>
//                 </tr>`;
//                 tbody.insertAdjacentHTML('beforeend', row);
//             });
//         } else {
//             tbody.innerHTML = "<tr><td colspan='4'>No posts found!</td></tr>";
//         }
//     });
// }

// // Delete Post
// window.confirmDelete = (key) => {
//     if (confirm("Are you sure you want to delete this post?")) {
//         const userId = auth.currentUser.uid;
//         remove(ref(db, `posts/${userId}/${key}`)).then(() => {
//             notify.innerHTML = "Post Deleted";
//             fetchPosts(userId);
//         });
//     }
// };

// // Edit Post
// window.editPost = (key) => {
//     const userId = auth.currentUser.uid;
//     get(ref(db, `posts/${userId}/${key}`)).then((snapshot) => {
//         const { title, content } = snapshot.val();
//         document.querySelector('#title').value = title;
//         document.querySelector('#post_content').value = content;
//         editKey = key;
//         postBtn.innerHTML = "Update Post";
//     });
// };

// // Reset Form
// function resetForm() {
//     document.querySelector('#title').value = "";
//     document.querySelector('#post_content').value = "";
//     editKey = null;
//     postBtn.innerHTML = "Post Now";
// }







import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase, ref, set, get, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAFeRHQNfVlBiW9aS1GV2COYU_tj3gV_c",
    authDomain: "hackathon-prep-3955c.firebaseapp.com",
    databaseURL: "https://hackathon-prep-3955c-default-rtdb.firebaseio.com",
    projectId: "hackathon-prep-3955c",
    storageBucket: "hackathon-prep-3955c.firebaseapp.com",
    messagingSenderId: "925054448057",
    appId: "1:925054448057:web:564d46eb34af45cf2fc668",
    measurementId: "G-YT03TEGT0T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// DOM Elements
const my_blog = document.querySelector('.my_blog');
const login_page = document.querySelector('.login');
const notify = document.querySelector('.notify');  
const postBtn = document.querySelector('#post_btn');
const logoutBtn = document.querySelector('#logout');
const userNameDisplay = document.querySelector('#user_name'); 
const tbody = document.querySelector('tbody');
const profileImageInput = document.querySelector('#profile_image');  
let editKey = null;
let uploadedImageURL = ""; 

// Authentication Handling
onAuthStateChanged(auth, (user) => {
    if (user) {
        my_blog.classList.remove('hide');
        login_page.classList.add('hide');
        userNameDisplay.textContent = `Welcome, ${user.displayName || 'User'}`; 
        fetchPosts(user.uid);  
    } else {
        my_blog.classList.add('hide');
        login_page.classList.remove('hide');
    }
});

// Sign-In
document.querySelector('#sign_in').addEventListener('click', () => {
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    signInWithEmailAndPassword(auth, email, password)
        .then(() => notify.innerHTML = "Signed In")
        .catch(() => notify.innerHTML = "Invalid Credentials");
});

// Sign-Out
logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => notify.innerHTML = "Signed Out");
});

// Add or Update Post
postBtn.addEventListener('click', () => {
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#post_content').value.trim();
    const file = profileImageInput.files[0];

    if (!auth.currentUser) {
        notify.innerHTML = "You must be logged in to post!";
        return;
    }

    if (!title || !content) {
        notify.innerHTML = "Title and content are required!";
        return;
    }

    const userId = auth.currentUser.uid;
    const key = editKey || Date.now();
    const publishDate = new Date().toLocaleString();

    // Convert image to Base64 URL if file exists (from Code A)
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            uploadedImageURL = reader.result;
            savePostToDatabase(userId, key, title, content, publishDate, uploadedImageURL);
        };
        reader.readAsDataURL(file);
    } else {
        savePostToDatabase(userId, key, title, content, publishDate, uploadedImageURL);
    }
});

// Save Post to Database
function savePostToDatabase(userId, key, title, content, publishDate, imageURL) {
    set(ref(db, `posts/${userId}/${key}`), { title, content, publishDate, imageURL }).then(() => {
        notify.innerHTML = editKey ? "Post Updated" : "Post Added";
        resetForm();
        fetchPosts(userId);
    });
}

// Fetch Posts
function fetchPosts(userId) {
    get(ref(db, `posts/${userId}`)).then((snapshot) => {
        const posts = snapshot.val();
        tbody.innerHTML = '';

        if (posts) {
            const sortedPosts = Object.entries(posts).sort((a, b) => b[0] - a[0]);

            sortedPosts.forEach(([key, { title, content, publishDate, imageURL }]) => {
                const row = `<tr>
                    <td>${title}</td>
                    <td>${content}</td>
                    <td>${publishDate}</td>
                    <td>
                        <img src="${imageURL || 'default-avatar.png'}" alt="Profile" class="profile_image">
                    </td>
                    <td>
                        <button onclick="editPost('${key}')">Edit</button>
                        <button onclick="confirmDelete('${key}')">Delete</button>
                    </td>
                </tr>`;
                tbody.insertAdjacentHTML('beforeend', row);
            });
        } else {
            tbody.innerHTML = "<tr><td colspan='5'>No posts found!</td></tr>"; 
        }
    });
}

// Delete Post
window.confirmDelete = (key) => {
    if (confirm("Are you sure you want to delete this post?")) {
        const userId = auth.currentUser.uid;
        remove(ref(db, `posts/${userId}/${key}`)).then(() => {
            notify.innerHTML = "Post Deleted";
            fetchPosts(userId);
        });
    }
};

// Edit Post
window.editPost = (key) => {
    const userId = auth.currentUser.uid;
    get(ref(db, `posts/${userId}/${key}`)).then((snapshot) => {
        const { title, content, imageURL } = snapshot.val();
        document.querySelector('#title').value = title;
        document.querySelector('#post_content').value = content;
        uploadedImageURL = imageURL;
        editKey = key;
        postBtn.innerHTML = "Update Post";
    });
};

// Reset Form
function resetForm() {
    document.querySelector('#title').value = "";
    document.querySelector('#post_content').value = "";
    profileImageInput.value = "";
    uploadedImageURL = "";
    editKey = null;
    postBtn.innerHTML = "Post Now";
}
