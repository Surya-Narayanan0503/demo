<script setup lang="ts">

import session from "../models/session";

</script>

<template>
                      <div class="buttons" v-if="!session.user">
                    <router-link class="button is-primary" to="/signup">
                      <strong>Sign up</strong>
                    </router-link>
                    <router-link class="button is-light" to="/login">
                      Log in
                    </router-link>
                  </div>
                  <div class="buttons" v-else>
                      <div class="avatar">
                          <img :src="session.user.pic" />
                          <strong>{{session.user.firstName}} {{session.user.lastName}}</strong><br />
                          <i>{{session.user.email}} </i>
                      </div>
                  </div>
                  <a class="button is-primary" @click="Logout">
                          <strong>Log Out</strong>
                      </a>
                    </div>

                  
                      
                    
</template>



<style scoped lang="scss">
.avatar{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: .5em;
    gap: .5em;

    img{
        width:48px;
        height: 48px;
        max-height: max-content;

    }
}

</style>