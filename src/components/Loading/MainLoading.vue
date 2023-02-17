
<template>
<div class="min-h-screen w-full bg-primary-lightest-2 z-20 fixed flex justify-center items-center">
    <svg  :class="`${className} text-4xl text-primary-dark animate-spin`" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"></path><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributename="transform" dur="1s" from="0 12 12" repeatcount="indefinite" to="360 12 12" type="rotate">
        </animateTransform></path>
    </svg>
</div>
</template>

<script>
export default {
  name: 'Main Loading',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>