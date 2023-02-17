
<template>
  <svg :class="className" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
</template>

<script>
export default {
  name: 'MenuIcon',
    props: {
        className: {
        type: String,
        default: ''
        },
    }
}
</script>