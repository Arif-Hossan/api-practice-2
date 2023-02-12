/*
const loadPhotos2 = ()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res)=>res.json())
    .then(data=>console.log(data.slice(0,50)));
}
loadPhotos2();
*/
const loadPhotos = async ()=>{
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch (url);
    const data = await res.json();
    displayPhotos(data);
}
// invoke loadPhotos function
loadPhotos();
// display photos container
const displayPhotos = photos => {
    const photosContainer = document.getElementById('photos-container')
    // display only 12 photos first
    photos= photos.slice(0,99);
    photos.forEach(photo => {
    const photoDiv= document.createElement('div');
    photoDiv.classList.add('col');
    photoDiv.innerHTML=`
    <div class="card h-100">
    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${photo.title}</h5>
      <a onclick="loadAlbumDetails(${photo.albumId})" data-bs-toggle="modal" data-bs-target="#photoDetailModal" class="btn btn-primary">Details</a>
    </div>`;
    photosContainer.appendChild(photoDiv);
    });
}

const loadAlbumDetails= (id)=>{
  const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
  fetch(url)
  .then((res)=>res.json())
  .then(data=>displayAlbumDetails(data));
}

const displayAlbumDetails=(album)=>{
const modalTitle =document.getElementById('photoDetailModalLabel');
modalTitle.innerText=`${album.title}`;
const userId=document.getElementById('userId');
userId.innerText=`User ID : ${album.userId}`;
const Id=document.getElementById('id');
Id.innerText=`ID : ${album.id}`;
}


