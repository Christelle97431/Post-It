<template>

<!-- component -->

<div class="ml-10 mr-10 items-center justify-center ">

<section class="bg-white dark:bg-gray-900">
      <div class="flex justify-center h-[42rem]">

        <!-- ------------------------------------------- -->
        <!-- --------------- FORMULAIRE ---------------- -->
        <!-- ------------------------------------------- -->
          
        <div class="flex items-start w-3xl max-w-3xl mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">

                <div v-if="success">
                    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                          <div class="flex">
                              <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                              </div>
                              <div>
                              <p class="font-bold">Votre Post a bien été envoyé !</p>
                              </div>
                          </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-regal-violet to-regal-blue col-span-2 text-2xl font-bold p-5 mt-10">Formulaire de saisie du Post
                </div>

                <p class="block mb-2 mt-5 text-lg font-medium text-gray-900 dark:text-white">Title</p>

                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="title" placeholder="your title" />

                <p class="block mb-2 mt-5 text-lg font-medium text-gray-900 dark:text-white">Message</p>
                <!-- <p style="white-space: pre-line;">{{ message }}</p> -->

                <textarea class="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="message" placeholder="your message"></textarea>

                <div>
                    <button @click="send()">         
                      <h1 class="rounded-lg border  border-gray-300 font-bold p-2 mt-5 w-20 bg-gradient-to-r from-regal-violet to-regal-blue hover:from-pink-400 hover:to-yellow-400">Envoyer</h1>
                    </button>
                </div>
            </div>
        </div>

        <!-- ------------------------------------------- -->
        <!-- ---------------- IMAGE -------------------- -->
        <!-- ------------------------------------------- -->

        <div class="hidden lg:block lg:bg-cover lg:w-[32rem]">
          <img src="../assets/img_02.jpg" alt="office with post-it notes on the glass door"/>
        </div>

      </div>

</section>
</div>

</template>


<script>
export default {
  data() {
    return {
        title: '',
        message: '',
        success:false,
    }
  },


  methods : {

    // -------------------------------------------
    // -------------- CREER UN POST --------------
    // -------------------------------------------
      send(){

      if(this.title =="" || this.message ==""){
        alert("Tous les champs doivent être saisis");
      }
      else{
        console.log(this.title + "" + this.message);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("content[0]", this.message);
        urlencoded.append("title", this.title);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        fetch("http://5.135.119.239:3090/notes", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        this.success=true;

       }
      }
  }

}

</script>


