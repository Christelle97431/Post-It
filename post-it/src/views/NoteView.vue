<script setup>
import Note from "../components/Note.vue";
</script>


<template>
      <Note :title="title" :id="id" :content="content"/>
</template>


<script>
export default {
  components: { Note },

  data() {
    return {

      title: "",
      id: this.$route.params.id,
      content:"",
    }
  },

  // -------------------------------------------
  // ----------- AFFICHER UN POST --------------
  // -------------------------------------------
  created(){
    console.log("id : " + this.id);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://5.135.119.239:3090/notes/"+this.id, requestOptions)
      // Changer response.text() en response.json()
      .then(response => (response.json()))
      .then(result => {console.log(result.note)
        this.title=result.note.title,
        this.content=result.note.content[0]
      })
      .catch(error => console.log('error', error));   
  },

}

</script>
