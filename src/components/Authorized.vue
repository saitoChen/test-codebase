<script>
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    const { props, scopedSlots, parent } = context
    return props.authority.includes(parent.$store.getters.scope) ? scopedSlots.default() : null
  }
}
</script>
