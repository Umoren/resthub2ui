<template>
    <div>
      <section class="container"> 
        <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#">Contacts Wizard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Add Contacts <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">View All Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
      </section>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style scoped>
    .navbar-brand{
        background-color: black !important;
    }
    .nav-link{
        color: white !important;
    }
</style>