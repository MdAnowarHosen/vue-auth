<template>
    <div class="">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <RouterLink class="navbar-brand" :to="{ name: 'home' }">Auth App</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'about' }">About</RouterLink>
                        </li>
                        <li v-if="!loggedIn" class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'login' }">Login</RouterLink>
                        </li>
                        <li  v-if="!loggedIn" class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'register' }">Register</RouterLink>
                        </li>
                        <li v-if="loggedIn" class="nav-item">
                            <a class="nav-link" href="#" @click="logout()">Logout</a>
                        </li>

                        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    computed:
    {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    methods:{
        logout()
        {
            this.$store.dispatch('logout').then(()=>{
               this.$router.push({
                name: 'login'
               });
            });
            
        }
    }

}
</script>

<style lang="scss" scoped></style>