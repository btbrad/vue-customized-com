export default {
  functional: true,
  inject: [ 'tableRoot' ],
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
    }
  },
  render: (h, ctx) => {
    return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }))
  }

}
