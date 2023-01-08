<template lang="">

  <div class="grid md:grid-cols-4 gap-4 ml-10 mr-10 mt-5 bg-cover bg-[url('./assets/img_01.jpg')]">
  
  <!-- ------------------------------------------- -->
  <!-- ------------- SEARCH BAR ------------------ -->
  <!-- ------------------------------------------- -->
  
  <form class="flex-start mt-10 ml-2 mr-2">   
      <!-- <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> -->
      <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" v-model="this.titre" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisissez votre recherche" required>
          <button @click="searchTitle" type="button" class="text-white absolute right-2.5 bottom-2.5 bg-blue-navbar hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
  </form>
  
  
  <!-- ------------------------------------------- -->
  <!-- ------- AFFICHAGE TOUS LES POSTS ---------- -->
  <!-- ------------------------------------------- -->
  
  <!-- {notes = tableau de l'API} -->
  <div class="ml-2 mr-2" v-for="note in notes">   
  
    <div class="flex flew-row border-4 shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-lg h-50 bg-gradient-to-r from-regal-violet to-regal-blue">
        <!--horizantil margin is just for display-->
      <div class="flex items-start text-sm px-4 py-6">
          <div class="">
            <p class="truncate w-[25rem] text-gray-700"><span class="font-bold">Id : </span>{{ note._id }}</p>
            
            <p class="text-gray-700 mt-4 "><span class="font-bold">Title :</span> {{ note.title }}</p>
  
            <p class="truncate w-[25rem] mt-3 text-gray-700">
            <span class="font-bold ">Message : </span>{{ note.content[0] }}</p>
  
            <div class="mt-4 flex items-center">
                <div class="flex mr-2 text-gray-700">
                  <router-link :to="`/note/${ note._id }`">
                      <svg fill="none" viewBox="0 0 24 24" class="w-7 h-7 mr-1" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                      </svg>
                  </router-link>
                  <span>View more</span>
                </div>
            </div>
          </div>
      </div>
    </div>
  
  </div>
  
  <!-- ------------------------------------------- -->
  <!-- ---------- FERMETURE 1ère DIV ------------- -->
  <!-- ------------------------------------------- -->
  </div>
  
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        notes:[],
        titre:"",
      }
    },
    methods : {
      //---------------------------------------------
      //------------- AFFICHER LES POTS  ------------
      //---------------------------------------------
      getAllNotes(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      fetch("http://5.135.119.239:3090/notes", requestOptions)
        // Changer response.text() en response.json()
        .then(response => response.json())
        .then(result => {console.log(result.notes),this.notes = result.notes})
        .catch(error => console.log('error', error));
        console.log("résulat de tous les posts : "+this.notes);
      },
      //---------------------------------------------
      //------------- RECHERCHER POSTS --------------
      //---------------------------------------------
      searchTitle(){
        // NE FONCTIONNE PAS !!!!
        console.log("texte recherché : "+this.titre);
        console.log("type : "+typeof(this.titre));
        // IL FAUT RECUPERER L'ID CORRESPONDANT AU MOT RECHERCHÉ 
        // ET AFFICHER ENSUITE LE POST CORRESPONDANT ?????
        // OU FAIRE UNE REQUÊTE SELECT ID WHERE Title = valeur saisie dans
        // la barre de recherche ???
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://5.135.119.239:3090/notes/"+this.id, requestOptions)
          .then(response => response.text())
          .then(result => {console.log(result)})
          .catch(error => console.log('error', error));
          console.log("résultat de la recherche" + result);
          
      }
      
    },
    // Moment dans la vue, appelé avant de faire l'affichage des post-it
    beforeMount(){
    this.getAllNotes();
    },
    // Moment dans la vue, lorsqu'il y a un changement d'affichage des post-it
    updated(){
      // ça fonctionne mais c'est trop gênant dans le script
      // alert("La page a été rafraîchie");
    }
  }   
  </script>