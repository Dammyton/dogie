<template>
<!-- Homepage Breadcrumb -->
    <div class="container mt">
         <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
export default {
    name:'breadcrumb',
    data() {
        return {
            items: [
                {
                    text: 'Home',
                    href: '/'
                },
                {
                    text: 'All Breeds',
                    active: true
                }
            ],
        }
    }
}
</script>

<style scoped>
a:hover{
    text-decoration: none;
    color:blue;
}
a{
    color:black !important;
}
.mt{
    margin-top:4rem !important;
}
</style>