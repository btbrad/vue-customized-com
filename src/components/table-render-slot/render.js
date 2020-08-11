export default {
  functional: true,
  props: {
    row: {
      type: Object,
      default: () => {}
    },
    column: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
    renderFn: {
      type: Function,
      default: () => {}
    }
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }
    return ctx.props.renderFn(h, params)
  }
}
