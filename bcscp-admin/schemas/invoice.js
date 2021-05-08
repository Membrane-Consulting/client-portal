export default {
  name: 'invoice',
  title: 'invoice',
  type: 'file',
  fields: [
    {
      name: 'number',
      title: 'Invoice Number',
      type: 'string',
    },
    {
      name: 'outstanding',
      title: 'Currently Outstanding?',
      type: 'boolean',
    },
    {
      name: 'amountDue',
      title: 'Amount Due',
      type: 'number',
    },
  ],
}