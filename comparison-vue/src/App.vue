<template>
  <Message :message="message"/>
</template>

<script>
import Message from './components/Message.vue'

export default {
  name: 'app',
  data: () => {
    return {
      message: 'Oiii, tudo bom contigo?'
    }
  },
  components: {
    Message
  }
}
</script>
