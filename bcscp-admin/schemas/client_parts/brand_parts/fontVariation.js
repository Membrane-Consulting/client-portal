export default {
  name: 'fontVariation',
  title: 'Font Variation',
  type: 'object',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'vname',
      title: 'Variation Name',
      type: 'string',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
    },
    {
      name: 'styles',
      title: 'Styles',
      type: 'array',
      of: [{ name: 'style', title: 'Style', type: 'string' }]
    },
  ],
}