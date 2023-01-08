<template lang="">

<div class="flex ml-10 mt-5 h-[42rem] bg-cover bg-[url('./assets/img_03.jpg')]" >
   <div class="flex items-start max-w-3xl mx-auto ">
      <div class="w-full">

      <!-- ------------------------------------------- -->
      <!-- ------- MESSAGE UPDATE POST-IT ------------ -->
      <!-- ------------------------------------------- -->
      <div v-if="success">
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                  <div class="flex">
                     <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                     </div>
                     <div>
                     <p class="font-bold">Votre Post a bien été modifié !</p>
                     </div>
                  </div>
            </div>
      </div>


      <!-- ------------------------------------------- -->
      <!-- --------------- POST-IT ------------------- -->
      <!-- ------------------------------------------- -->

      <div class="flex flew-row shadow-lg rounded-lg mx-4 md:mx-auto my-10 bg-gradient-to-r from-regal-violet to-regal-blue">

         <div class="flex text-sm px-4 py-6 border-2 border-white">
            <div class="w-2xl">
               <p class="text-gray-700"><span class="font-bold">Id : </span>{{ id }}</p>

               <p class="text-gray-700 mt-4 "><span class="font-bold">Title :</span> {{ title }}</p>
               <!-- le v-if permet d'afficher la zone input uniquement si l'on clique sur Update -->
               <p v-if="change">
                  <div class="mb-6">
                     <input type="text" id="default-input" v-model="newTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your new title here...">
                  </div>
               </p>

               <p class="mt-3 text-gray-700"><span class="font-bold ">Message : </span>{{ content }}</p>
               <!-- le v-if permet d'afficher la zone input uniquement si l'on clique sur Update -->
               <p v-if="change">
                  <div class="mb-6 mt-2">
                     <textarea v-model="newMessage"  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your new message here..."></textarea>
                  </div>
               </p>

               <div class="mt-4 flex items-center">
                  <div class="flex mr-2 text-gray-700">
                     <button v-on:click="update"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
                     </button>
                     <span>Update</span>
                  </div>
                  <div class="flex mr-2 text-gray-700">         
                     <button v-on:click="destroyed">
                        <svg class="w-7 h-7 mr-1 ml-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                     </button>
                     <span>Delete</span>
                  </div>
               </div>

            </div>
         </div>
      </div>


<!-- ------------------------------------------- -->
<!-- --------- FERMETURE 3 1ère DIV ------------ -->
<!-- ------------------------------------------- -->
      </div>
   </div>
</div>

</template>



<script>
export default {
   props: ['id', 'title', 'content'],

   data() {
      return {
         success:true,
         newTitle:"",
         newMessage:"",
         change:false,
      }
   },

   methods: {

      // -------------------------------------------
      // ----------- SUPPRIMER UN POST -------------
      // -------------------------------------------
      destroyed(){
            console.log(this.id);
            if (this.id !== undefined){

               if (confirm("Êtes-vous sûr de vouloir supprimer le Post-it ?") == true){
                  var requestOptions = {
                  method: 'DELETE',
                  redirect: 'follow'
                  };

                  fetch("http://5.135.119.239:3090/notes/"+this.id, requestOptions)
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));

                  alert("Le Post-it a bien été supprimé");
                  this.success = true;
                  this.$router.push('/');
               }
            }
            else{

               alert("Le Post-it n'existe pas !")
            }
         },

      // -------------------------------------------
      // --------- METTRE A JOUR UN POST -----------
      // -------------------------------------------
      
      update(){
         this.change=true;
         if (this.newTitle != "" || this.newMessage != ""){
            if (this.newTitle == "" && this.newMessage != ""){
               this.newTitle = this.title;
            };
            if (this.newMessage == "" && this.newTitle != ""){
               this.newMessage = this.content;
            };
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("title", this.newTitle);
            urlencoded.append("content", this.newMessage);

            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };

            fetch("http://5.135.119.239:3090/notes/"+this.id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            alert("le Post-It a bien été modifié !")
            this.success=true;
            // this.$router.replace(this.id);
            location.reload();
         }
         else {
            alert("Vous n'avez pas fait de mise à jour du Post-it !")
         }
      }
        

   },

}
</script>






