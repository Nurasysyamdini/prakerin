
<template>
  <svg :class="className" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M236 128a108 108 0 1 0-181 79.5a11.4 11.4 0 0 0 1.6 1.5a107.9 107.9 0 0 0 142.8 0a11.4 11.4 0 0 0 1.6-1.5a107.7 107.7 0 0 0 35-79.5Zm-192 0a84 84 0 1 1 149.9 51.9a84 84 0 0 0-28.9-23.4a52 52 0 1 0-74 0a84 84 0 0 0-28.9 23.4A83.4 83.4 0 0 1 44 128Zm56-8a28 28 0 1 1 28 28a28.1 28.1 0 0 1-28-28Zm-20.4 76.6a59.9 59.9 0 0 1 96.8 0a83.8 83.8 0 0 1-96.8 0Z"></path></svg>
</template>
<script>
export default {
    name: 'PeopleIcon',
    props: {
        className: {
            type: String,
            default: ''
        }
    }
}
</script>