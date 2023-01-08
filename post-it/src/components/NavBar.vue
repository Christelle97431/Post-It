<template lang="">

<div>
    <ul class="flex pl-10">
      <li class="mr-3">
        <router-link to="/" class="inline-block border border-blue-navbar rounded py-1 px-3 bg-blue-navbar text-white">@ List Post-It</router-link>
      </li>
      <div class="flex">
        <li class="mr-3">
          <router-link to="/Formulaire" class="inline-block border border-white rounded hover:border-gray-200 text-blue-navbar hover:bg-gray-200 py-1 px-3">Add Post-It</router-link>
        </li>
      </div>
    </ul>

    <div >
        <router-view />
    </div>

</div>

</template>


