<template>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <div class="col-1">
            <img src="../../assets/img/img8.jpg" alt="twbs" width="56" height="56" class="rounded-circle flex-shrink-0">
        </div>
        <div class="col-10">
            <div>
                <h6 class="mb-0">Marta Gonzalez</h6>
                <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
            </div>
        </div>
        <div class="col-1">
            <small class="opacity-50 text-nowrap display-block float-right">3d</small>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right float-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </a>
</template>

<script>
export default {
    name: "ProfesoresListItem"
}
</script>

<style scoped>
.display-block {
    display: block;
}
</style>