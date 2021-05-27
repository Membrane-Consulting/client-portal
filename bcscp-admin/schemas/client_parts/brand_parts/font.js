export default {
  name: 'font',
  title: 'Font',
  type: 'object',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'importLink',
      title: 'Import Link',
      type: 'string',
    },
    {
      name: 'family',
      title: 'Font Family',
      description: 'The CSS font-family value for this font',
      type: 'string',
    },
    {
      name: 'use',
      title: 'What text should use this font?',
      type: 'string',
    },
    {
      name: 'variations',
      title: 'Variations',
      type: 'array',
      of: [{type: 'fontVariation'}]
    },
  ],
}