<script>
export default {
    props: {
        title: String
    }
}
</script>


<template>
    <h4>{{ title || 'No title passed yet' }}</h4>
</template>
